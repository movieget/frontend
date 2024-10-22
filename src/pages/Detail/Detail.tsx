import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Masonry from 'react-masonry-css'
import BackDropImage from '../../assets/img/detail_backdrop.jpg'
import PosterImage from '../../assets/img/detail_poster.jpg'
import PosterImage2 from '../../assets/img/penguin.png'
import Actor01 from '../../assets/img/detail_actor01.jpg'
import Actor02 from '../../assets/img/detail_actor02.jpg'
import Actor03 from '../../assets/img/detail_actor03.jpg'
import Actor04 from '../../assets/img/detail_actor04.jpg'
import Actor05 from '../../assets/img/detail_actor05.jpg'
import Actor06 from '../../assets/img/detail_actor06.jpg'
import Actor07 from '../../assets/img/detail_actor07.jpg'
import Actor08 from '../../assets/img/detail_actor08.jpg'
import review01 from '../../assets/img/detail_review01.jpg'
import review02 from '../../assets/img/detail_review02.jpg'
import review03 from '../../assets/img/detail_review03.jpg'
import review04 from '../../assets/img/detail_review04.jpg'
import review05 from '../../assets/img/detail_review05.jpg'
import review06 from '../../assets/img/detail_review06.jpg'
import review07 from '../../assets/img/detail_review07.jpg'
import review08 from '../../assets/img/detail_review08.jpg'
import review09 from '../../assets/img/detail_review09.jpg'
import review10 from '../../assets/img/detail_review10.jpg'
import review11 from '../../assets/img/detail_review11.jpg'
import review12 from '../../assets/img/detail_review12.jpg'
import review13 from '../../assets/img/detail_review13.jpg'
import review14 from '../../assets/img/detail_review14.jpg'
import review15 from '../../assets/img/detail_review15.jpg'
import review16 from '../../assets/img/detail_review16.jpg'
import review17 from '../../assets/img/detail_review17.jpg'
import review18 from '../../assets/img/detail_review18.jpg'
import review19 from '../../assets/img/detail_review19.jpg'
import review20 from '../../assets/img/detail_review20.jpg'
import review21 from '../../assets/img/detail_review21.jpg'
import review22 from '../../assets/img/detail_review22.jpg'
import review23 from '../../assets/img/detail_review23.jpg'
import review24 from '../../assets/img/detail_review24.jpg'
import review25 from '../../assets/img/detail_review25.jpg'
import review26 from '../../assets/img/detail_review26.jpg'
import review27 from '../../assets/img/detail_review27.jpg'
import review28 from '../../assets/img/detail_review28.jpg'
import review29 from '../../assets/img/detail_review29.jpg'
import review30 from '../../assets/img/detail_review30.jpg'

import { useState } from 'react'
import PageLayout from '../../components/Layouts/PageLayout'
import { Badge, BadgeBox, StyleAge, StyleTitle } from '../../components/Badge/style'
import { formatLikes } from '../../utils/formatLikes'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../../components/Checkbox/style'
import { AddIconBtn, MainBtn } from '../../components/Button/style'
import { Textarea, TextareaBox } from '../../components/Input/style'
import ImageUpload from '../../components/Input/ImageUpload/ImageUpload'
import StarRating from '../../components/StarRating/StarRating'
import useRating from '../../hooks/useRating'
import ProfileBadge from '../../components/Badge/ProfileBadge/ProfileBadge'

interface Actor {
  name: string
  image: string
}

interface DummyData {
  id: number
  backdropImage: string
  posterImage: string
  title: string
  age: number
  genre: string[]
  duration: number
  playing: boolean
  overview: string
  trailer: string
  actor: Actor[]
  isLikes: boolean
  totalLikes: number
}

const dummyData: DummyData = {
  id: 0,
  backdropImage: '이미지 경로',
  posterImage: '이미지 경로',
  title: '더 크로우',
  age: 18,
  genre: ['액션', 'SF/판타지'],
  duration: 200,
  playing: true,
  overview:
    '"더 크로우"는 에릭 드레븐이라는 뮤지션이 사랑하는 여자친구 셸리를 잔인하게 살해당한 후, 해골 같은 새의 힘으로 부활하는 이야기입니다. 에릭은 자신의 죽음을 기억하며 복수의 길에 나섭니다. 범죄자들을 처치하며 셸리와의 사랑을 되찾으려 하고, 자신의 과거와 마주합니다. 이 과정에서 그는 진정한 정의와 사랑의 의미를 찾으려 합니다. 에릭은 복수의 사냥꾼으로서, 그의 고통과 상실을 통해 인간의 복잡한 감정을 드러내며, 관객에게 깊은 여운을 남깁니다.',
  trailer: '트레일러 경로',
  actor: [
    { name: '빌 스카스가드', image: Actor01 },
    { name: 'FKA twigs', image: Actor02 },
    { name: '대니 휴스턴', image: Actor03 },
    { name: 'Laura Birn', image: Actor04 },
    { name: 'Jordan Bolger', image: Actor05 },
    { name: 'Isabella Wei', image: Actor06 },
    { name: 'Karel Dobrý', image: Actor07 },
    { name: 'Sebastian Orozco', image: Actor08 },
  ],
  isLikes: true,
  totalLikes: 2500,
}

interface Review {
  id: number
  userProfile: string
  userId: string
  score: number
  title: string
  content: string
  reviewImage: string
  creationDate: string
}

const reviewDummyData = [
  {
    id: 0,
    userProfile: '',
    userId: 'user1',
    score: 3,
    title: '재미있는 영화',
    content: '정말 재밌고 감동적인 영화였습니다. 강추합니다!',
    reviewImage: review01,
    creationDate: '2023-10-01',
  },
  {
    id: 1,
    userProfile: '',
    userId: 'user2',
    score: 5,
    title: '실망스러움',
    content: '기대했는데 기대 이하였습니다.',
    reviewImage: review02,
    creationDate: '2023-10-02',
  },
  {
    id: 2,
    userProfile: '',
    userId: 'user3',
    score: 4,
    title: '훌륭한 작품',
    content:
      '이 영화는 정말 훌륭했습니다. 각본과 연출 모두 뛰어났고, 특히 배우들의 연기가 빛났습니다. 감정이 잘 전달되어 많은 생각을 하게 만드는 영화였으며, 스토리가 전개될수록 더욱 흥미로워졌습니다. 여러 번 보아도 질리지 않을 것 같은 작품입니다.',
    reviewImage: review03,
    creationDate: '2023-10-03',
  },
  {
    id: 3,
    userProfile: '',
    userId: 'user4',
    score: 2,
    title: '지루했던 영화',
    content:
      '전반적으로 지루한 느낌이었습니다. 스토리가 너무 느리게 진행되어서 중간에 포기하고 싶었어요. 다소 기대했던 부분이 많았지만, 결국 실망스러운 경험이었습니다.',
    reviewImage: review04,
    creationDate: '2023-10-04',
  },
  {
    id: 4,
    userProfile: '',
    userId: 'user5',
    score: 5,
    title: '강력 추천',
    content:
      '이 영화는 정말 볼 가치가 있습니다. 스토리와 연출 모두 뛰어나고, 특히 감정선이 잘 표현되었습니다. 다양한 캐릭터들이 각자의 이야기를 가지고 있어 흥미를 끌었고, 그들의 관계가 어떻게 변화하는지를 보는 것이 큰 즐거움이었습니다. 다시 보고 싶어요!',
    reviewImage: review05,
    creationDate: '2023-10-05',
  },
  {
    id: 5,
    userProfile: '',
    userId: 'user6',
    score: 3,
    title: '보통의 영화',
    content:
      '재미는 있었지만 큰 감동은 없었습니다. 간단한 스토리와 캐릭터들로 인해 흥미가 떨어졌습니다. 여러 번 보기는 힘들 것 같아요.',
    reviewImage: review06,
    creationDate: '2023-10-06',
  },
  {
    id: 6,
    userProfile: '',
    userId: 'user7',
    score: 4,
    title: '재미있었어요',
    content:
      '어느 정도 긴장감이 유지되었고, 캐릭터들의 관계도 흥미로웠습니다. 특히 주인공이 갈등을 극복하는 과정이 인상 깊었고, 중간중간의 유머도 적절하게 배치되어 지루할 틈이 없었습니다. 관객을 사로잡는 매력이 있는 영화라고 생각합니다.',
    reviewImage: review07,
    creationDate: '2023-10-07',
  },
  {
    id: 7,
    userProfile: '',
    userId: 'user8',
    score: 1,
    title: '최악의 영화',
    content:
      '이런 영화를 보다니! 스토리도 엉망이고, 연기도 별로였습니다. 모든 것이 어설프게 느껴졌고, 시간을 낭비한 느낌이었습니다.',
    reviewImage: review08,
    creationDate: '2023-10-08',
  },
  {
    id: 8,
    userProfile: '',
    userId: 'user9',
    score: 4,
    title: '가슴이 따뜻해지는 영화',
    content:
      '가족의 소중함을 다시 한번 깨닫게 해주는 영화였습니다. 다양한 사건을 통해 서로를 이해하고, 화해하는 과정이 감동적이었습니다. 결말은 예측 가능했지만, 그 과정이 아름다웠습니다.',
    reviewImage: review09,
    creationDate: '2023-10-09',
  },
  {
    id: 9,
    userProfile: '',
    userId: 'user10',
    score: 5,
    title: '진정한 명작',
    content:
      '이 영화는 진정한 명작이라고 할 수 있습니다. 모든 요소가 완벽하게 조화를 이루며, 특히 음악과 시각적인 효과가 뛰어났습니다. 감정이입이 잘 되어 깊은 여운이 남았습니다.',
    reviewImage: review10,
    creationDate: '2023-10-10',
  },
  {
    id: 10,
    userProfile: '',
    userId: 'user11',
    score: 4,
    title: '감동적이었어요',
    content:
      '스토리와 연출 모두 훌륭했습니다. 특히 주인공의 감정이 잘 표현되어서 많은 생각을 하게 만들었습니다. 여러 가지 사회적 이슈도 다루고 있어서, 단순한 오락 영화가 아닌, 깊이 있는 메시지를 전하는 작품이라는 느낌을 받았습니다. 강력 추천합니다!',
    reviewImage: review11,
    creationDate: '2023-10-11',
  },
  {
    id: 11,
    userProfile: '',
    userId: 'user12',
    score: 3,
    title: '그냥 그랬어요',
    content:
      '기대했던 것보다 별로였어요. 캐릭터들의 깊이도 부족하고, 스토리가 전개되는 방식도 아쉬웠습니다. 그냥 한 번 보고 잊을 것 같아요.',
    reviewImage: review12,
    creationDate: '2023-10-12',
  },
  {
    id: 12,
    userProfile: '',
    userId: 'user13',
    score: 5,
    title: '완벽한 영화',
    content:
      '모든 면에서 완벽했습니다. 스토리, 연출, 음악 모두가 조화를 이루어 너무 좋았습니다. 특히 마지막 장면은 잊지 못할 것 같아요. 이 영화를 보며 느낀 감정들은 오랫동안 기억에 남을 것 같으며, 여러 번 다시 보고 싶은 마음이 듭니다. 감독의 의도가 잘 전달된 작품입니다.',
    reviewImage: review13,
    creationDate: '2023-10-13',
  },
  {
    id: 13,
    userProfile: '',
    userId: 'user14',
    score: 2,
    title: '실망스러운 작품',
    content:
      '다양한 요소가 시도되었지만, 결과적으로는 실망스러웠습니다. 스토리 전개가 너무 느리고, 캐릭터들 간의 관계도 빈약했습니다. 여러 장면에서 집중력이 떨어졌습니다.',
    reviewImage: review14,
    creationDate: '2023-10-14',
  },
  {
    id: 14,
    userProfile: '',
    userId: 'user15',
    score: 4,
    title: '흥미로운 이야기',
    content:
      '스토리가 매우 흥미로웠습니다. 예상치 못한 전개가 많아서 시청하는 내내 긴장을 놓지 못했습니다. 캐릭터들도 매력적이어서 더 빠져들게 되었어요.',
    reviewImage: review15,
    creationDate: '2023-10-15',
  },
  {
    id: 15,
    userProfile: '',
    userId: 'user16',
    score: 3,
    title: '재미있지만 아쉬운 점',
    content:
      '영화가 재미있었지만, 몇몇 부분에서는 아쉬운 점이 있었습니다. 특히 후반부 전개가 느려져서 집중력이 떨어졌고, 결말이 조금 아쉬웠습니다.',
    reviewImage: review16,
    creationDate: '2023-10-16',
  },
  {
    id: 16,
    userProfile: '',
    userId: 'user17',
    score: 5,
    title: '눈물이 나네요',
    content:
      '감정적으로 연결되는 부분이 많아서 정말 감동적이었습니다. 특히 가족 간의 사랑과 우정에 대한 이야기가 깊이 있게 다뤄졌습니다. 이 영화는 단순한 오락을 넘어 삶의 의미를 되새기게 해주는 작품이라, 여러 사람과 이야기 나누고 싶네요. 강력 추천합니다!',
    reviewImage: review17,
    creationDate: '2023-10-17',
  },
  {
    id: 17,
    userProfile: '',
    userId: 'user18',
    score: 4,
    title: '매력적인 캐릭터들',
    content:
      '영화 속 캐릭터들이 매력적이어서 더 흥미로웠습니다. 각자의 개성이 잘 드러나고, 그들이 나아가는 방향이 궁금해져서 스토리에 몰입할 수 있었습니다.',
    reviewImage: review18,
    creationDate: '2023-10-18',
  },
  {
    id: 18,
    userProfile: '',
    userId: 'user19',
    score: 2,
    title: '실망스러운 전개',
    content:
      '전개가 너무 뻔하고 예측 가능했어요. 중간중간 긴장감도 없어서 지루하게 느껴졌습니다. 아쉽지만 다시 보고 싶지는 않은 영화입니다.',
    reviewImage: review19,
    creationDate: '2023-10-19',
  },
  {
    id: 19,
    userProfile: '',
    userId: 'user20',
    score: 5,
    title: '영화의 묘미',
    content:
      '이 영화는 정말 뛰어난 작품입니다. 스토리 전개가 매끄럽고, 캐릭터의 심리가 잘 드러나 있어서 몰입도가 높았습니다. 특히, 결말은 생각지도 못한 반전을 선사해 감동을 주었습니다.',
    reviewImage: review20,
    creationDate: '2023-10-20',
  },
  {
    id: 20,
    userProfile: '',
    userId: 'user21',
    score: 3,
    title: '보통 수준',
    content:
      '보통의 영화였습니다. 몇몇 장면은 재미있었지만, 전체적으로 기억에 남는 부분이 적었습니다. 한 번 보면 잊어버릴 것 같은 느낌이었습니다.',
    reviewImage: review21,
    creationDate: '2023-10-21',
  },
  {
    id: 21,
    userProfile: '',
    userId: 'user22',
    score: 4,
    title: '감정의 흐름',
    content:
      '이 영화는 감정의 흐름이 잘 표현되어 있어서, 시청하는 동안 내내 몰입할 수 있었습니다. 특히, 주인공이 어려움을 극복하는 과정이 인상 깊었고, 그로 인해 감정이입이 잘 되었습니다.',
    reviewImage: review22,
    creationDate: '2023-10-22',
  },
  {
    id: 22,
    userProfile: '',
    userId: 'user23',
    score: 5,
    title: '인생 영화',
    content:
      '이 영화는 제 인생 영화 중 하나가 되었습니다. 스토리가 너무 감동적이었고, 여러 장면에서 눈물이 흘렀습니다. 배우들의 연기도 훌륭했고, 음악이 감정을 더욱 고조시켰습니다.',
    reviewImage: review23,
    creationDate: '2023-10-23',
  },
  {
    id: 23,
    userProfile: '',
    userId: 'user24',
    score: 2,
    title: '지루한 영화',
    content:
      '스토리가 느리고, 캐릭터들이 매력적이지 않았습니다. 전반적으로 흥미가 떨어져서 집중하기 힘들었습니다. 아쉽게도 다시 보고 싶지 않은 영화입니다.',
    reviewImage: review24,
    creationDate: '2023-10-24',
  },
  {
    id: 24,
    userProfile: '',
    userId: 'user25',
    score: 2,
    title: '영화의 의미?',
    content:
      '이 영화가 전달하고자 하는 메시지가 무엇인지 도무지 알 수 없었습니다. 너무 혼란스러웠고, 스토리 전개가 이해하기 어려웠습니다. 기대했던 것에 비해 실망스러운 결과였습니다.',
    reviewImage: review25,
    creationDate: '2023-10-25',
  },
  {
    id: 25,
    userProfile: '',
    userId: 'user26',
    score: 4,
    title: '우정의 힘',
    content:
      '이 영화는 우정에 대한 깊은 이야기를 다루고 있어서 많은 감동을 주었습니다. 친구들 간의 갈등과 화해가 잘 표현되었고, 특히 서로를 이해하는 과정이 인상적이었습니다. 결말은 예측 가능했지만, 그 과정이 너무나 아름다웠습니다. 다시 보고 싶어요!',
    reviewImage: review26,
    creationDate: '2023-10-26',
  },
  {
    id: 26,
    userProfile: '',
    userId: 'user27',
    score: 3,
    title: '전형적인 로맨스',
    content:
      '로맨스 영화로서 전형적인 전개를 보여주었습니다. 특별한 감동은 없었고, 예상한 대로 흘러가는 스토리에 실망했습니다. 기대한 것보다 아쉬운 점이 많았습니다.',
    reviewImage: review27,
    creationDate: '2023-10-27',
  },
  {
    id: 27,
    userProfile: '',
    userId: 'user28',
    score: 5,
    title: '빛나는 영화',
    content:
      '이 영화는 정말 빛나는 작품입니다. 스토리와 캐릭터 모두 훌륭했고, 특히 음악이 그 감정을 더욱 배가시켰습니다. 여러 장면에서 눈물이 날 정도로 감동적이었으며, 다시 보고 싶습니다.',
    reviewImage: review28,
    creationDate: '2023-10-28',
  },
  {
    id: 28,
    userProfile: '',
    userId: 'user29',
    score: 4,
    title: '재미있는 스릴러',
    content:
      '스릴러 요소가 잘 결합되어 있어 긴장감을 유지했습니다. 예상치 못한 전개가 많아서 흥미를 끌었고, 특히 클라이맥스에서의 반전이 인상적이었습니다.',
    reviewImage: review29,
    creationDate: '2023-10-29',
  },
  {
    id: 29,
    userProfile: '',
    userId: 'user30',
    score: 5,
    title: '완벽한 엔딩',
    content:
      '영화의 결말이 너무 아름다웠습니다. 모든 갈등이 해결되고, 각 캐릭터의 이야기가 마무리되는 방식이 정말 감동적이었습니다. 이 영화를 보면서 삶의 의미를 다시 한 번 생각하게 되었습니다. 친구들에게도 추천하고 싶은 작품입니다.',
    reviewImage: review30,
    creationDate: '2023-10-30',
  },
]

const Detail = () => {
  const [movie, setMovie] = useState(dummyData)
  const [image1, setImage1] = useState<string | null>(null)
  const { rating: userRating1, handleRatingChange: handleRatingChange1 } = useRating()

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  return (
    <DetailPage>
      {/* 백드롭 */}
      <BackDropImgBox>
        <BackDropImg src={BackDropImage} alt={movie.title} />
      </BackDropImgBox>
      <PageLayout>
        {/* 영화 상세 */}
        <MovieDetailWrapper>
          <MovieDetails>
            <PosterImgBox>
              <PosterImg src={PosterImage} alt={movie.title} />
            </PosterImgBox>
            <MovieInfo>
              <MovieInfoTop>
                <MovieTitleHoder>
                  <MovieTitle>
                    <StyleAge $age='18' />
                    {movie.title} 3
                  </MovieTitle>
                  <Badge $playing='playing'>상영중</Badge>
                </MovieTitleHoder>
                <BadgeBox>
                  {movie.genre.map((item) => {
                    return <Badge key={item}>{item}</Badge>
                  })}
                  <Badge $color='orange'>{movie.duration}분</Badge>
                </BadgeBox>
                <MovieOverviwe>{movie.overview}</MovieOverviwe>
              </MovieInfoTop>
              <MovieInfoBottom>
                <MainBtn $size='large'>예매하기</MainBtn>
                <CheckboxWrapper>
                  <Checkbox type='checkbox' id='CheckHeartCount' name='' checked={movie.isLikes} />
                  <CheckHeartCount htmlFor='CheckHeartCount' $color=''>
                    {formatLikes(movie.totalLikes)}
                  </CheckHeartCount>
                </CheckboxWrapper>
              </MovieInfoBottom>
            </MovieInfo>
          </MovieDetails>

          {/* 트레일러 */}
          <MovieTrailerBox>
            <StyleTitle>Trailer</StyleTitle>
            <MovieTrailer
              width='100%'
              style={{ aspectRatio: '16 / 9', height: 'auto' }}
              src='https://www.youtube.com/embed/djSKp_pwmOA?si=l1wO5dvCTL_p6bKx'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></MovieTrailer>
          </MovieTrailerBox>

          {/* 배우 */}
          <MovieActorBox>
            <StyleTitle>Actor</StyleTitle>
            <MovieActorList>
              <Slider {...settings}>
                {movie.actor.map((actor) => (
                  <MovieActor key={actor.name}>
                    <MovieActorImg
                      src={actor.image}
                      alt={actor.name}
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <MovieActorName>{actor.name}</MovieActorName>
                  </MovieActor>
                ))}
              </Slider>
            </MovieActorList>
          </MovieActorBox>
        </MovieDetailWrapper>

        {/* 리뷰 */}
        <MovieReviewWrapper>
          <StyleTitle>Review</StyleTitle>
          <MovieReviewForm>
            <TextareaBox width=''>
              <Textarea width='' placeholder='텍스트를 입력하세요.' />
            </TextareaBox>

            <ReviewInputWrapper>
              <StarRating
                rating={userRating1}
                onRatingChange={handleRatingChange1}
                userId='user1'
              />
              <ActionBtnBox>
                <ImageUpload image={image1} setImage={setImage1} />
                <AddIconBtn $size='large'>작성하기</AddIconBtn>
              </ActionBtnBox>
            </ReviewInputWrapper>
          </MovieReviewForm>

          {/*  */}
          <UserRiviewWrapper>
            <Masonry
              breakpointCols={4} // 화면 크기에 따라 열 수 조정
              className='my-masonry-grid' // 클래스 이름
              columnClassName='my-masonry-grid_column' // 각 열의 클래스 이름
            >
              {reviewDummyData.map((item, index) => (
                <UserRiviewBox key={index}>
                  <RiviewImgBox>
                    <RiviewImg src={item.reviewImage} alt={`Item ${index}`} />
                  </RiviewImgBox>
                  <RiviewInfoBox>
                    <RiviewUserInfo>
                      <UserInfoHolder>
                        <ProfileBadge src='' width='3.2rem' height='3.2rem' />

                        <UserInfoBox>
                          <UserId>{item.userId}</UserId>
                          <CreationDate>{item.creationDate}</CreationDate>
                        </UserInfoBox>
                      </UserInfoHolder>
                      <StarRating value={item.score} disabled={true} />
                    </RiviewUserInfo>
                    <RiviewTitle>{item.title}</RiviewTitle>
                    <RiviewContent>{item.content}</RiviewContent>
                  </RiviewInfoBox>
                </UserRiviewBox>
              ))}
            </Masonry>
          </UserRiviewWrapper>
        </MovieReviewWrapper>
      </PageLayout>
    </DetailPage>
  )
}

export default Detail

const UserRiviewWrapper = styled.div`
  .my-masonry-grid {
    display: flex;
    margin-left: -24px; /* 그리드 간격 조정 */
    width: auto; /* 자동 너비 */
  }

  .my-masonry-grid_column {
    padding-left: 24px; /* 각 열의 간격 */
    background-clip: padding-box; /* 배경 클립 */
  }
`
const UserRiviewBox = styled.div`
  margin-bottom: 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #494949;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`

const RiviewImgBox = styled.span``
const RiviewImg = styled.img`
  width: 100%;
`

const RiviewInfoBox = styled.div`
  padding: 1.2rem;
`
const RiviewUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserInfoHolder = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
const UserInfoBox = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`
const UserId = styled.span`
  font-size: 1.6rem;
`
const CreationDate = styled.span`
  font-size: 1.2rem;
`

const RiviewTitle = styled.p`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
`
const RiviewContent = styled.p`
  margin-top: 0.8rem;
  font-size: 1.6rem;
  line-height: 1.25;
`

const DetailPage = styled.div``

const BackDropImgBox = styled.span`
  display: block;
  margin: 0 auto;
`
const BackDropImg = styled.img`
  width: 100%;
  /* filter: blur(2px); */
`

const MovieDetailWrapper = styled.div``

// 영화 상세
const MovieDetails = styled.div`
  display: flex;
  gap: 6rem;
  padding-top: 6rem;
`
const PosterImgBox = styled.span`
  display: block;
  width: 100%;
  max-width: 40rem;
  margin-top: -14rem;
`
const PosterImg = styled.img`
  width: 100%;
`
const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
const MovieInfoTop = styled.div``
const MovieTitleHoder = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #3f3f3f;
`
const MovieTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 3.2rem;
  font-weight: 700;
`
const MovieOverviwe = styled.p`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  word-break: keep-all;
`
const MovieInfoBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

// 트레일러
const MovieTrailerBox = styled.div`
  margin-top: 10rem;
`
const MovieTrailer = styled.iframe`
  margin-top: 2.4rem;
`

// 배우
const MovieActorBox = styled.div`
  margin-top: 10rem;
`
const MovieActorList = styled.div`
  margin-top: 2.4rem;
  div:focus-visible {
    outline: none;
  }
  .slick-track {
    display: flex;
    gap: 1.8rem;
    width: 100%;

    &::before,
    &::after {
      display: none;
    }
  }
  .slick-arrow {
    display: none !important;
    position: absolute;
  }
  .slick-dots {
    li {
      width: auto;
      height: auto;
      margin: 0 4px;
      button {
        content: '';
        position: initial;
        display: block;
        width: 8px;
        height: 8px;
        padding: 0;
        line-height: initial;
        background-color: #353535;
        border: 1px solid;
        border-color: #353535;
        border-radius: 4px;
        opacity: 1;
        transition: all 0.3s;
        &::before {
          display: none;
        }
      }

      &.slick-active {
        button {
          width: 12px;
          background-color: #f45917;
          border-color: #ff8b59;
          transition: all 0.3s;
        }
      }
    }
  }
`
const MovieActor = styled.div``
const MovieActorImg = styled.img``
const MovieActorName = styled.p`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  font-weight: 600;
`

// 리뷰
const MovieReviewWrapper = styled.div`
  margin-top: 10rem;
`
const MovieReviewForm = styled.div`
  padding-bottom: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid #3f3f3f;
`
const ReviewInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1.2rem;
`
const ActionBtnBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`
