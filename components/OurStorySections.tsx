import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";

/** Full-bleed photo band with right-aligned copy (desktop) / centered (mobile). */
function PhotoBand({
  image,
  headingId,
  title,
  body,
}: {
  image: string;
  headingId: string;
  title: string;
  body: string;
}) {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-10 lg:py-[60px]"
      aria-labelledby={headingId}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(image)}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative flex w-full max-w-[1200px] items-center justify-center rounded-[12px] px-[30px] py-10 lg:justify-end lg:px-[50px] lg:py-[104px]">
        <div className="flex w-full flex-col items-center gap-[30px] text-center text-white lg:w-[505px] lg:items-start lg:text-left">
          <h2
            id={headingId}
            className="w-full text-[32px] font-extrabold uppercase leading-none lg:text-[48px]"
          >
            {title}
          </h2>
          <p className="w-full text-lg font-semibold leading-[1.5] text-white/85">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}

function BigDadSection() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center py-[30px] lg:py-[100px]"
      aria-labelledby="big-dad-heading"
    >
      {/* Mobile — image above, centered copy */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="w-full px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/our-story/big-dad.jpg")}
            alt="Shane Thompson with his grandfather Dewey “Big Dad” Brown"
            className="h-[290px] w-full rounded-[12px] object-cover object-top"
          />
        </div>
        <div className="w-full px-5 pb-5">
          <div className="flex w-full flex-col items-start gap-[30px] px-[30px] pt-10 text-center">
            <h2
              id="big-dad-heading"
              className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red"
            >
              Big Dad’s Big Influence
            </h2>
            <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
              “Do what you love, and do it better than anybody else.” That’s the
              advice Shane’s grandfather, Big Dad, gave as they were perfecting
              the family recipes you can still enjoy today.
            </p>
            <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
              Dewey “Big Dad” Brown played football for Clemson, served in WWII
              and settled down with the love of his life, Peggy. They were married
              for over 60 years, but Big Dad said it “wasn’t nearly long enough.”
              Shane spent summers with him until age 14, when he moved in for good
              to fish, travel and cook.
            </p>
            <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
              Through it all, Big Dad said, “You only get a good reputation once,
              so you better make the most of it.” He passed that motto down to
              Shane, along with his old fly reel and the secret sauce recipe.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop — copy left, image right */}
      <div className="hidden w-full max-w-[1200px] items-center gap-20 px-5 lg:flex xl:px-0">
        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-10">
          <h2 className="w-full text-[48px] font-extrabold uppercase leading-none text-brand-red">
            Big Dad’s Big Influence
          </h2>
          <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
            “Do what you love, and do it better than anybody else.” That’s the
            advice Shane’s grandfather, Big Dad, gave as they were perfecting the
            family recipes you can still enjoy today.
          </p>
          <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
            Dewey “Big Dad” Brown played football for Clemson, served in WWII and
            settled down with the love of his life, Peggy. They were married for
            over 60 years, but Big Dad said it “wasn’t nearly long enough.” Shane
            spent summers with him until age 14, when he moved in for good to
            fish, travel and cook.
          </p>
          <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
            Through it all, Big Dad said, “You only get a good reputation once, so
            you better make the most of it.” He passed that motto down to Shane,
            along with his old fly reel and the secret sauce recipe.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/our-story/big-dad.jpg")}
          alt="Shane Thompson with his grandfather Dewey “Big Dad” Brown"
          className="h-[475px] w-[580px] shrink-0 rounded-[12px] object-cover object-top"
        />
      </div>
    </section>
  );
}

function JoinTeamSection() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center py-[30px] lg:py-[100px]"
      aria-labelledby="join-team-heading"
    >
      {/* Mobile — image above, centered copy */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="w-full px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/our-story/join-team.jpg")}
            alt="Shane's Rib Shack team member smiling behind the counter"
            className="h-[290px] w-full rounded-[12px] object-cover object-top"
          />
        </div>
        <div className="w-full px-5 pb-5">
          <div className="flex w-full flex-col items-start gap-[30px] px-[30px] pt-10 text-center">
            <h2
              id="join-team-heading"
              className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red"
            >
              Join Our Team
            </h2>
            <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
              {`Your local Shane’s Rib Shack could be looking for someone just like you. If you love BBQ, taking care of people, helping your community, and having fun while you work, then Shane's is the place for you! To apply, fill out an application below or stop by your local shack. After form submission, you will receive a confirmation email.`}
            </p>
            <div className="flex w-full flex-col items-center gap-3">
              <Cta href="/careers/">Careers</Cta>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop — image left, copy right */}
      <div className="hidden w-full max-w-[1200px] items-center gap-20 px-5 lg:flex xl:px-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/our-story/join-team.jpg")}
          alt="Shane's Rib Shack team member smiling behind the counter"
          className="h-[475px] w-[580px] shrink-0 rounded-[12px] object-cover object-top"
        />
        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-10">
          <h2 className="w-full text-[48px] font-extrabold uppercase leading-none text-brand-red">
            Join Our Team
          </h2>
          <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
            {`Your local Shane’s Rib Shack could be looking for someone just like you. If you love BBQ, taking care of people, helping your community, and having fun while you work, then Shane's is the place for you! To apply, fill out an application below or stop by your local shack. After form submission, you will receive a confirmation email.`}
          </p>
          <Cta href="/careers/">Join Our Team</Cta>
        </div>
      </div>
    </section>
  );
}

export default function OurStorySections() {
  return (
    <>
      <PhotoBand
        image="/images/our-story/shane-portrait.jpg"
        headingId="there-really-is-a-shane-heading"
        title="There Really Is A Shane"
        body="Family. Hard work. Darn-good BBQ. That’s what Shane Thompson built his business around. In 2002, Shane ditched his corporate job, tossed his tie and followed a dream with his wife, Stacey. He dusted off his grandfather, Big Dad’s, secret BBQ recipe and opened up the very first Shack in McDonough, GA. It wasn’t long before the community noticed how he always gives people more than what they pay for and treats everybody like family."
      />
      <BigDadSection />
      <PhotoBand
        image="/images/our-story/giving-back.jpg"
        headingId="giving-back-heading"
        title="Giving Back"
        body="The real secret behind great BBQ is a sense of community. Shane and Stacey Thompson understand that supporting our local school, churches, hospitals and businesses keep our communities safe and strong. That’s why, wherever there’s a Shane’s Rib Shack, there are employees making a positive impact. Whether it’s donating food, raising funds for churches, feeding hometown football teams, offering a comfy place for gatherings or rewarding students for good grades, giving back is always our #1 priority."
      />
      <JoinTeamSection />
    </>
  );
}
