import Image from "next/image";
import type { CommitteeMember } from "@/data/executive-committee";

function MemberAvatar({ member }: { member: CommitteeMember }) {
  if (member.imageUrl) {
    return (
      <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-saffron/40 shadow-lg">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="160px"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 border-amber/60 bg-gradient-to-br from-maroon/10 to-saffron/20 text-5xl shadow-lg">
      🙏
    </div>
  );
}

export function TeamGrid({ members }: { members: CommitteeMember[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <article key={`${member.name}-${member.role}`} className="card text-center">
          <MemberAvatar member={member} />
          <h3 className="mt-4 text-lg font-bold text-maroon-deep">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-saffron">{member.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-brown/85">
            {member.description}
          </p>
        </article>
      ))}
    </div>
  );
}
