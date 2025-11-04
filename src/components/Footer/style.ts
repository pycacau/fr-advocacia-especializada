import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  overflow: visible;

  padding: 0 1.5rem 0 1.5rem;
  margin-top: 4rem;

  background:
    linear-gradient(135deg, rgba(26, 24, 28, 0.98) 0%, rgba(20, 18, 22, 0.98) 100%),
    radial-gradient(circle at 30% 30%, rgba(163, 145, 133, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(139, 125, 107, 0.05) 0%, transparent 50%);
  border-radius: 48px;
  border: 1px solid rgba(163, 145, 133, 0.3);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 100px rgba(163, 145, 133, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(45deg, transparent 30%, rgba(163, 145, 133, 0.02) 50%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .animate-in {
    animation: fadeInUp 0.8s ease-out forwards !important;
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0;

  .footer-main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
    flex: 1;

    .brand-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      min-width: 280px;

      .logo-container {
        position: relative;

        .footer-logo {
          width: 64px;
          height: 56px;
          filter: brightness(0.9);
          transition: all 0.4s ease;
        }

        .brand-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: linear-gradient(135deg, rgba(163, 145, 133, 0.3), rgba(139, 125, 107, 0.2));
          border-radius: 12px;
          filter: blur(8px);
          opacity: 0.6;
          animation: logoGlow 3s ease-in-out infinite;
          z-index: -1;
        }
      }

      .brand-info {
        .brand-name {
          font-family: 'Lato', sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          color: ${(props) => props.theme.gray100};
          margin: 0 0 0.5rem 0;
          background: linear-gradient(135deg, ${(props) => props.theme.gray100}, #a39185);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-tagline {
          font-family: 'Fira Sans', sans-serif;
          font-weight: 400;
          font-size: 1rem;
          color: rgba(163, 145, 133, 0.8);
          margin: 0;
          opacity: 0.9;
        }

        .brand-decoration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;

          .decoration-line {
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, rgba(163, 145, 133, 0.3), rgba(163, 145, 133, 0.6));
            border-radius: 1px;
          }

          .decoration-accent {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: linear-gradient(135deg, #a39185, #8b7d70);
            box-shadow: 0 0 15px rgba(163, 145, 133, 0.5);
          }
        }
      }
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
      flex: 1;

      .info-section {
        .section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Lato', sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: ${(props) => props.theme.gray100};
          margin: 0 0 1rem 0;

          .section-icon {
            color: #a39185;
            font-size: 1.2rem;
          }
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          .info-text {
            font-family: 'Fira Sans', sans-serif;
            font-weight: 400;
            font-size: 0.95rem;
            color: ${(props) => props.theme.gray400};
            margin: 0;
            line-height: 1.5;
          }

          .info-link {
            font-family: 'Fira Sans', sans-serif;
            font-weight: 500;
            font-size: 0.95rem;
            color: rgba(163, 145, 133, 0.9);
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;

            &:hover {
              color: #a39185;
              text-shadow: 0 0 8px rgba(163, 145, 133, 0.6);
              transform: translateX(5px);
            }
          }

          .contact-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-family: 'Fira Sans', sans-serif;
            font-weight: 500;
            font-size: 0.95rem;
            color: ${(props) => props.theme.gray300};
            text-decoration: none;
            transition: all 0.3s ease;
            padding: 0.5rem;
            border-radius: 8px;
            background: rgba(163, 145, 133, 0.05);
            border: 1px solid rgba(163, 145, 133, 0.1);

            &:hover {
              background: rgba(163, 145, 133, 0.1);
              transform: translateY(-2px);
              box-shadow: 0 5px 15px rgba(163, 145, 133, 0.2);
            }

            .contact-icon {
              color: #a39185;
              font-size: 1rem;
            }
          }

          .availability {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-family: 'Fira Sans', sans-serif;
            font-weight: 500;
            font-size: 0.85rem;
            color: rgba(163, 145, 133, 0.8);

            .availability-dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #4ade80;
              box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
              animation: pulseDot 2s ease-in-out infinite;
            }
          }

          .legal-link {
            font-family: 'Fira Sans', sans-serif;
            font-weight: 500;
            font-size: 0.95rem;
            color: rgba(163, 145, 133, 0.9);
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
              color: #a39185;
              text-shadow: 0 0 8px rgba(163, 145, 133, 0.6);
            }
          }

          .license-text {
            font-family: 'Fira Sans', sans-serif;
            font-weight: 400;
            font-size: 0.9rem;
            color: ${(props) => props.theme.gray500};
            margin: 0;
          }

          .oab-badge {
            margin-top: 0.5rem;

            .oab-number {
              display: inline-block;
              padding: 0.25rem 0.75rem;
              background: linear-gradient(135deg, rgba(163, 145, 133, 0.1), rgba(139, 125, 107, 0.1));
              border: 1px solid rgba(163, 145, 133, 0.2);
              border-radius: 20px;
              font-family: 'Fira Sans', sans-serif;
              font-weight: 600;
              font-size: 0.8rem;
              color: #a39185;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
          }

          .dev-text {
            font-family: 'Fira Sans', sans-serif;
            font-weight: 400;
            font-size: 0.9rem;
            color: ${(props) => props.theme.gray500};
            margin: 0;
          }

          .dev-link {
            font-family: 'Fira Sans', sans-serif;
            font-weight: 600;
            font-size: 0.95rem;
            color: rgba(163, 145, 133, 0.9);
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
              color: #a39185;
              text-shadow: 0 0 8px rgba(163, 145, 133, 0.6);
            }
          }

          .tech-stack {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.75rem;
            flex-wrap: wrap;

            .tech-badge {
              padding: 0.2rem 0.6rem;
              background: rgba(163, 145, 133, 0.1);
              border: 1px solid rgba(163, 145, 133, 0.2);
              border-radius: 12px;
              font-family: 'Fira Sans', sans-serif;
              font-weight: 500;
              font-size: 0.75rem;
              color: rgba(163, 145, 133, 0.8);
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
          }
        }
      }
    }
  }

  .social-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    min-width: 200px;

    .social-title {
      text-align: center;

      span {
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
        color: ${(props) => props.theme.gray100};
        display: block;
        margin-bottom: 0.5rem;
      }

      .social-underline {
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #a39185, #8b7d70);
        border-radius: 2px;
        margin: 0 auto;
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;

      .social-link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, rgba(163, 145, 133, 0.1), rgba(139, 125, 107, 0.1));
        border: 1px solid rgba(163, 145, 133, 0.3);
        border-radius: 16px;
        color: ${(props) => props.theme.gray300};
        text-decoration: none;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(163, 145, 133, 0.2), transparent);
          transition: left 0.6s ease;
        }

        &:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow:
            0 10px 30px rgba(163, 145, 133, 0.3),
            0 0 50px rgba(163, 145, 133, 0.2);
          border-color: rgba(163, 145, 133, 0.6);

          &::before {
            left: 100%;
          }

          &.linkedin { color: #0077b5; }
          &.facebook { color: #1877f2; }
          &.instagram { color: #e4405f; }
        }

        .social-tooltip {
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(26, 24, 28, 0.9);
          color: ${(props) => props.theme.gray100};
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(163, 145, 133, 0.2);
          white-space: nowrap;

          &::after {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid rgba(26, 24, 28, 0.9);
          }
        }

        &:hover .social-tooltip {
          opacity: 1;
          visibility: visible;
          bottom: -40px;
        }
      }
    }

    .copyright {
      text-align: center;
      margin-top: 1rem;

      p {
        font-family: 'Fira Sans', sans-serif;
        font-weight: 400;
        font-size: 0.85rem;
        color: ${(props) => props.theme.gray500};
        margin: 0;
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 1024px) {
    .footer-main {
      gap: 3rem;

      .info-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .social-nav {
      min-width: 180px;
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

    .footer-main {
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
      text-align: center;

      .brand-section {
        align-items: center;
        text-align: center;
      }

      .info-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 600px;
      }
    }

    .social-nav {
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem 0 1rem;

    .footer-main .info-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .social-nav .social-links {
      gap: 0.8rem;

      .social-link {
        width: 45px;
        height: 45px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem 0 0.5rem;
    margin-top: 2rem;

    .footer-main {
      gap: 2rem;

      .brand-section {
        min-width: auto;

        .brand-info .brand-name {
          font-size: 1.3rem;
        }

        .brand-info .brand-tagline {
          font-size: 0.9rem;
        }
      }

      .info-grid {
        gap: 1.5rem;

        .info-section .info-content {
          gap: 0.5rem;

          .info-text,
          .info-link,
          .contact-link,
          .legal-link {
            font-size: 0.9rem;
          }
        }
      }
    }

    .social-nav {
      gap: 1.5rem;

      .social-title span {
        font-size: 1.1rem;
      }

      .social-links {
        gap: 0.6rem;

        .social-link {
          width: 40px;
          height: 40px;
        }
      }

      .copyright p {
        font-size: 0.8rem;
      }
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes logoGlow {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @keyframes pulseDot {
    0%, 100% {
      opacity: 0.6;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`
