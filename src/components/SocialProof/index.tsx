import { SocialProofContainer, TestimonialCard, StarRating } from './style'

const testimonials = [
  {
    text: 'Quando pensei que tudo estava perdido, o Dr. Roney apareceu como um salvador. Orientou-me em cada passo e lutou pelo meu direito. Recuperei minha paz graças ao seu trabalho excepcional.',
    author: 'Carlos Silva',
    rating: 5,
    role: 'Cliente Empresarial'
  },
  {
    text: 'Nunca imaginei que um advogado pudesse ser tão humano. O Dr. Roney me apoiou o tempo todo, explicando tudo de forma simples e sempre disponível. Recomendo sem hesitar.',
    author: 'Maria Santos',
    rating: 5,
    role: 'Cliente Família'
  },
  {
    text: 'Contratei o Dr. Roney para um caso complicado e ele superou expectativas. Estratégia brilhante e resultado melhor que esperado. Profissionalismo aliado a preocupação genuína.',
    author: 'João Oliveira',
    rating: 5,
    role: 'Cliente Trabalhista'
  }
]

export function SocialProof() {
  return (
    <SocialProofContainer>
      <h2 className="section-title">Depoimentos</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <div className="card-header">
              <div className="quote-icon">"</div>
              <StarRating>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>★</span>
                ))}
              </StarRating>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
            <div className="author-section">
              <div className="author-avatar">
                <span className="avatar-initials">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="author-info">
                <strong className="author-name">{testimonial.author}</strong>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </div>
            <div className="card-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
            </div>
          </TestimonialCard>
        ))}
      </div>
    </SocialProofContainer>
  )
}
