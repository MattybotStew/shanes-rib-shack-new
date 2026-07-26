import { createReadStream, existsSync, readFileSync } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "out");
const port = Number.parseInt(process.env.PORT ?? "3000", 10);

// A GitHub Pages build (GITHUB_PAGES=true) prefixes every asset/link URL with
// the repo basePath (e.g. /shanes-rib-shack-new/...) even though the export
// emits files at the root of out/. To smoke-test that artifact exactly as CI
// builds it, emulate the Pages mount: resolve prefixed URLs against out/ root.
function detectBasePath() {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
  if (fromEnv) {
    const withSlash = fromEnv.startsWith("/") ? fromEnv : `/${fromEnv}`;
    return withSlash.replace(/\/$/, "");
  }
  // Auto-detect: Pages builds reference chunks as "/<basePath>/_next/...".
  try {
    const html = readFileSync(path.join(root, "index.html"), "utf8");
    const match = html.match(/"(\/[^/"]+)\/_next\//);
    return match?.[1] ?? "";
  } catch {
    return "";
  }
}

const basePath = detectBasePath();

function stripBasePath(pathname) {
  if (!basePath) return pathname;
  if (pathname === basePath) return "/";
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length);
  return pathname;
}

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, {
    "Content-Type": contentTypes[ext] ?? "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(filePath).pipe(res);
}

async function resolvePath(urlPath) {
  const pathname = stripBasePath(decodeURIComponent(urlPath.split("?")[0]));
  const normalized = pathname === "/" ? "/index.html" : pathname;

  const candidates = [
    path.join(root, normalized),
    path.join(root, normalized, "index.html"),
    path.join(root, `${normalized}.html`),
  ];

  for (const candidate of candidates) {
    if (!candidate.startsWith(root)) continue;
    if (existsSync(candidate)) {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    }
  }

  const notFound = path.join(root, "404.html");
  if (existsSync(notFound)) {
    return { notFound };
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  const resolved = await resolvePath(req.url ?? "/");

  if (!resolved) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  if (typeof resolved === "object" && "notFound" in resolved) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    createReadStream(resolved.notFound).pipe(res);
    return;
  }

  sendFile(res, resolved);
});

server.listen(port, () => {
  console.log(`Static export server listening on http://127.0.0.1:${port}`);
});
