import { SocialProofContainer, TestimonialCard, StarRating } from './style'
import commentIcon from '../../assets/comment_icon.svg'
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
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ))
  }

  return (
    <SocialProofContainer>
      <h2>Depoimentos</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <img src={commentIcon} alt="Quote" className="quote-icon" />
            <p>{testimonial.text}</p>
            <StarRating>{renderStars(testimonial.rating)}</StarRating>
            <div className="author">
              <strong>{testimonial.author}</strong>
            </div>
          </TestimonialCard>
        ))}
      </div>
    </SocialProofContainer>
  )
}
