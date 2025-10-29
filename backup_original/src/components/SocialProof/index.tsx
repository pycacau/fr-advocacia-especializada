import { SocialProofContainer, TestimonialCard, StarRating } from './style'

const testimonials = [
  {
    text: 'Quando pensei que tudo estava perdido, o Dr. Roney apareceu como um salvador. Orientou-me em cada passo e lutou pelo meu direito. Recuperei minha paz graças ao seu trabalho excepcional.',
    author: 'Carlos Silva',
    rating: 5
  },
  {
    text: 'Nunca imaginei que um advogado pudesse ser tão humano. O Dr. Roney me apoiou o tempo todo, explicando tudo de forma simples e sempre disponível. Recomendo sem hesitar.',
    author: 'Maria Santos',
    rating: 5
  },
  {
    text: 'Contratei o Dr. Roney para um caso complicado e ele superou expectativas. Estratégia brilhante e resultado melhor que esperado. Profissionalismo aliado a preocupação genuína.',
    author: 'João Oliveira',
    rating: 5
  }
]

export function SocialProof() {
  return (
    <SocialProofContainer>
      <h2>Depoimentos</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <StarRating>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>★</span>
              ))}
            </StarRating>
            <p>{testimonial.text}</p>
            <div className="author">
              <strong>{testimonial.author}</strong>
            </div>
          </TestimonialCard>
        ))}
      </div>
    </SocialProofContainer>
  )
}
