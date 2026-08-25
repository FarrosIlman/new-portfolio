import React from 'react';

const ContactCTA = () => {
  
  const socialLinks = [
    {
      id: 'email',
      title: 'Email',
      href: 'mailto:rosilman000@gmail.com',
    },
    {
      id: 'github',
      title: 'GitHub',
      href: 'https://github.com/farrosilman',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/farrosilman',
    },
  ];

  return (
    <section id="contact" className="py-40 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl flex flex-col items-center text-center">
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-sans font-medium tracking-tight text-[#111111] mb-20 leading-[1.05]">
          Let's build <br/>
          <span className="text-[#888888] italic">something meaningful.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 md:gap-16">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-xl md:text-2xl font-medium text-[#555555] hover:text-[#111111] transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
