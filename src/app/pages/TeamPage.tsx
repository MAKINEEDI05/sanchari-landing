import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Linkedin, Github, Twitter, Sparkles } from 'lucide-react';
import { TEAM, TeamMember } from '../../config/team';
import { COMPANY } from '../../config/company';
import { Container } from '../components/layout/Container';

export function TeamPage() {
  const founder = TEAM.find((member) => member.category === 'founder');
  const coreMembers = TEAM.filter((member) => member.category === 'core');
  const advisors = TEAM.filter((member) => member.category === 'advisor');
  const contributors = TEAM.filter((member) => member.category === 'contributor');

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative w-20 h-20 mb-5 rounded-2xl overflow-hidden border border-gray-100 shrink-0">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-black text-gray-900 mb-0.5 tracking-tight">{member.name}</h3>
        <p className="text-brand text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{member.bio}</p>
      </div>

      <div className="flex gap-3 text-gray-400">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
            <Linkedin className="w-4.5 h-4.5" />
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
            <Github className="w-4.5 h-4.5" />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">
            <Twitter className="w-4.5 h-4.5" />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero */}
      <section className="relative pt-20 pb-14 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-indigo-100/50 via-pink-50/20 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-50/40 to-transparent rounded-full blur-3xl -z-10" />

        <Container>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-brand text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Meet the Minds
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tight leading-[1.04] mb-6 max-w-3xl">
              The force driving {COMPANY.name} forward.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              We are a group of creators, engineers, advisors, and safety advocates building the future of safe mobility in India.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Founder Section */}
      {founder && (
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <Container>
            <div className="max-w-4xl bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-100/40 mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="relative w-44 h-44 rounded-3xl overflow-hidden border border-gray-100 shrink-0 shadow-lg">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-2">
                    Founding Leadership
                  </span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-1">{founder.name}</h2>
                  <p className="text-gray-500 font-bold text-sm mb-4">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">{founder.bio}</p>

                  <div className="flex justify-center md:justify-start gap-4 text-gray-400">
                    {founder.linkedin && (
                      <a href={founder.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-xs font-bold">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </a>
                    )}
                    {founder.github && (
                      <a href={founder.github} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors flex items-center gap-1.5 text-xs font-bold">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Core Team */}
      {coreMembers.length > 0 && (
        <section className="py-16">
          <Container>
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Core Execution Team</h2>
              <p className="text-gray-500 text-sm mt-2">Developing solutions to safety and transportation mismatches.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreMembers.map((member, i) => (
                <MemberCard key={i} member={member} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Advisors */}
      {advisors.length > 0 && (
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <Container>
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Board & Strategic Advisors</h2>
              <p className="text-gray-500 text-sm mt-2">Guiding {COMPANY.name} on policy, urban planning, and platform safety.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisors.map((member, i) => (
                <MemberCard key={i} member={member} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Contributors */}
      {contributors.length > 0 && (
        <section className="py-16">
          <Container>
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Open Source & Community Contributors</h2>
              <p className="text-gray-500 text-sm mt-2">Valued minds helping build and secure {COMPANY.name} ecosystem modules.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributors.map((member, i) => (
                <MemberCard key={i} member={member} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
