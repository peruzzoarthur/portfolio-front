import { Github, Linkedin } from 'lucide-react'

export const BlogFooter = () => {
  return (
    <footer className="w-full flex items-center justify-center pb-10 space-x-2" id="footer">
          <p className="md:text-base text-small md:font-normal font-light mr-2">
            Copyright © 2024 Arthur Peruzzo
          </p>
              <a
                href="https://github.com/peruzzoarthur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/arthur-peruzzo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
    </footer>
  )
}
