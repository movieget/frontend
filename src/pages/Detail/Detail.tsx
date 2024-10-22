import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Masonry from 'react-masonry-css'
import BackDropImage from '../../assets/img/detail_backdrop.jpg'
import PosterImage from '../../assets/img/detail_poster.jpg'
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
import review31 from '../../assets/img/detail_review31.jpg'
import review32 from '../../assets/img/detail_review32.jpg'
import review33 from '../../assets/img/detail_review33.jpg'
import review34 from '../../assets/img/detail_review34.jpg'
import review35 from '../../assets/img/detail_review35.jpg'
import review36 from '../../assets/img/detail_review36.jpg'
import review37 from '../../assets/img/detail_review37.jpg'
import review38 from '../../assets/img/detail_review38.jpg'
import review39 from '../../assets/img/detail_review39.jpg'
import review40 from '../../assets/img/detail_review40.jpg'
import review41 from '../../assets/img/detail_review41.jpg'
import review42 from '../../assets/img/detail_review42.jpg'
import review43 from '../../assets/img/detail_review43.jpg'
import review44 from '../../assets/img/detail_review44.jpg'
import review45 from '../../assets/img/detail_review45.jpg'
import review46 from '../../assets/img/detail_review46.jpg'
import review47 from '../../assets/img/detail_review47.jpg'
import review48 from '../../assets/img/detail_review48.jpg'
import review49 from '../../assets/img/detail_review49.jpg'
import review50 from '../../assets/img/detail_review50.jpg'
import review51 from '../../assets/img/detail_review51.jpg'
import review52 from '../../assets/img/detail_review52.jpg'
import review53 from '../../assets/img/detail_review53.jpg'
import review54 from '../../assets/img/detail_review54.jpg'
import review55 from '../../assets/img/detail_review55.jpg'
import review56 from '../../assets/img/detail_review56.jpg'
import review57 from '../../assets/img/detail_review57.jpg'
import review58 from '../../assets/img/detail_review58.jpg'
import review59 from '../../assets/img/detail_review59.jpg'
import review60 from '../../assets/img/detail_review60.jpg'

import { useEffect, useRef, useState } from 'react'
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
import { useInfiniteQuery } from '@tanstack/react-query'

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

// const reviewDummyData1 = [
//   {
//     id: 0,
//     userProfile: '',
//     userId: 'user1',
//     score: 3,
//     title: '재미있는 영화',
//     content: '정말 재밌고 감동적인 영화였습니다. 강추합니다!',
//     reviewImage: review01,
//     creationDate: '2023-10-01',
//   },
//   {
//     id: 1,
//     userProfile: '',
//     userId: 'user2',
//     score: 5,
//     title: '실망스러움',
//     content: '기대했는데 기대 이하였습니다.',
//     reviewImage: review02,
//     creationDate: '2023-10-02',
//   },
//   {
//     id: 2,
//     userProfile: '',
//     userId: 'user3',
//     score: 4,
//     title: '훌륭한 작품',
//     content: '각본과 연출 모두 뛰어났습니다. 강력 추천!',
//     reviewImage: review03,
//     creationDate: '2023-10-03',
//   },
//   {
//     id: 3,
//     userProfile: '',
//     userId: 'user4',
//     score: 2,
//     title: '지루한 영화',
//     content: '스토리가 느려서 지루했습니다.',
//     reviewImage: review04,
//     creationDate: '2023-10-04',
//   },
//   {
//     id: 4,
//     userProfile: '',
//     userId: 'user5',
//     score: 5,
//     title: '강력 추천',
//     content: '이 영화는 정말 볼 가치가 있습니다. 스토리와 연출 모두 뛰어나고, 다시 보고 싶어요!',
//     reviewImage: review05,
//     creationDate: '2023-10-05',
//   },
//   {
//     id: 5,
//     userProfile: '',
//     userId: 'user6',
//     score: 3,
//     title: '보통의 영화',
//     content: '재미는 있었지만 큰 감동은 없었습니다.',
//     reviewImage: review06,
//     creationDate: '2023-10-06',
//   },
//   {
//     id: 6,
//     userProfile: '',
//     userId: 'user7',
//     score: 4,
//     title: '재미있었어요',
//     content: '어느 정도 긴장감이 유지되었습니다. 인상 깊었습니다!',
//     reviewImage: review07,
//     creationDate: '2023-10-07',
//   },
//   {
//     id: 7,
//     userProfile: '',
//     userId: 'user8',
//     score: 1,
//     title: '최악의 영화',
//     content: '스토리가 엉망이었습니다. 시간을 낭비한 느낌이었습니다.',
//     reviewImage: review08,
//     creationDate: '2023-10-08',
//   },
//   {
//     id: 8,
//     userProfile: '',
//     userId: 'user9',
//     score: 4,
//     title: '가슴이 따뜻해지는 영화',
//     content: '가족의 소중함을 느끼게 해주는 영화였습니다.',
//     reviewImage: review09,
//     creationDate: '2023-10-09',
//   },
//   {
//     id: 9,
//     userProfile: '',
//     userId: 'user10',
//     score: 5,
//     title: '진정한 명작',
//     content: '모든 요소가 완벽하게 조화를 이루었습니다.',
//     reviewImage: review10,
//     creationDate: '2023-10-10',
//   },
// ]

// const reviewDummyData2 = [
//   {
//     id: 10,
//     userProfile: '',
//     userId: 'user11',
//     score: 4,
//     title: '감동적이었어요',
//     content: '스토리와 연출이 훌륭했습니다. 강력 추천합니다!',
//     reviewImage: review11,
//     creationDate: '2023-10-11',
//   },
//   {
//     id: 11,
//     userProfile: '',
//     userId: 'user12',
//     score: 3,
//     title: '그냥 그랬어요',
//     content: '기대보다 별로였습니다.',
//     reviewImage: review12,
//     creationDate: '2023-10-12',
//   },
//   {
//     id: 12,
//     userProfile: '',
//     userId: 'user13',
//     score: 5,
//     title: '완벽한 영화',
//     content: '모든 면에서 완벽했습니다. 잊지 못할 장면이 많았습니다.',
//     reviewImage: review13,
//     creationDate: '2023-10-13',
//   },
//   {
//     id: 13,
//     userProfile: '',
//     userId: 'user14',
//     score: 2,
//     title: '실망스러운 작품',
//     content: '스토리가 느리고 집중력이 떨어졌습니다.',
//     reviewImage: review14,
//     creationDate: '2023-10-14',
//   },
//   {
//     id: 14,
//     userProfile: '',
//     userId: 'user15',
//     score: 4,
//     title: '흥미로운 이야기',
//     content: '예상치 못한 전개가 많아서 흥미로웠습니다.',
//     reviewImage: review15,
//     creationDate: '2023-10-15',
//   },
//   {
//     id: 15,
//     userProfile: '',
//     userId: 'user16',
//     score: 3,
//     title: '재미있지만 아쉬운 점',
//     content: '몇몇 부분에서 아쉬운 점이 있었습니다.',
//     reviewImage: review16,
//     creationDate: '2023-10-16',
//   },
//   {
//     id: 16,
//     userProfile: '',
//     userId: 'user17',
//     score: 5,
//     title: '눈물이 나네요',
//     content: '가족 간의 사랑에 대한 깊이 있는 이야기였습니다.',
//     reviewImage: review17,
//     creationDate: '2023-10-17',
//   },
//   {
//     id: 17,
//     userProfile: '',
//     userId: 'user18',
//     score: 4,
//     title: '매력적인 캐릭터들',
//     content: '각자의 개성이 잘 드러났습니다.',
//     reviewImage: review18,
//     creationDate: '2023-10-18',
//   },
//   {
//     id: 18,
//     userProfile: '',
//     userId: 'user19',
//     score: 2,
//     title: '실망스러운 전개',
//     content: '예측 가능하고 지루했습니다.',
//     reviewImage: review19,
//     creationDate: '2023-10-19',
//   },
//   {
//     id: 19,
//     userProfile: '',
//     userId: 'user20',
//     score: 5,
//     title: '영화의 묘미',
//     content: '스토리 전개가 매끄러웠습니다. 감동적이었습니다.',
//     reviewImage: review20,
//     creationDate: '2023-10-20',
//   },
// ]

// const reviewDummyData3 = [
//   {
//     id: 20,
//     userProfile: '',
//     userId: 'user21',
//     score: 3,
//     title: '보통 수준',
//     content: '몇몇 장면은 재미있었지만 기억에 남지 않았습니다.',
//     reviewImage: review21,
//     creationDate: '2023-10-21',
//   },
//   {
//     id: 21,
//     userProfile: '',
//     userId: 'user22',
//     score: 4,
//     title: '감정의 흐름',
//     content: '주인공의 성장 과정이 인상 깊었습니다.',
//     reviewImage: review22,
//     creationDate: '2023-10-22',
//   },
//   {
//     id: 22,
//     userProfile: '',
//     userId: 'user23',
//     score: 5,
//     title: '인생 영화',
//     content: '눈물이 날 정도로 감동적이었습니다.',
//     reviewImage: review23,
//     creationDate: '2023-10-23',
//   },
//   {
//     id: 23,
//     userProfile: '',
//     userId: 'user24',
//     score: 2,
//     title: '지루한 영화',
//     content: '스토리가 느리고 흥미가 떨어졌습니다.',
//     reviewImage: review24,
//     creationDate: '2023-10-24',
//   },
//   {
//     id: 24,
//     userProfile: '',
//     userId: 'user25',
//     score: 2,
//     title: '영화의 의미?',
//     content: '전개가 혼란스러웠습니다.',
//     reviewImage: review25,
//     creationDate: '2023-10-25',
//   },
//   {
//     id: 25,
//     userProfile: '',
//     userId: 'user26',
//     score: 4,
//     title: '우정의 힘',
//     content: '친구 간의 갈등이 잘 표현되었습니다.',
//     reviewImage: review26,
//     creationDate: '2023-10-26',
//   },
//   {
//     id: 26,
//     userProfile: '',
//     userId: 'user27',
//     score: 3,
//     title: '전형적인 로맨스',
//     content: '예상한 대로 흘러갔습니다.',
//     reviewImage: review27,
//     creationDate: '2023-10-27',
//   },
//   {
//     id: 27,
//     userProfile: '',
//     userId: 'user28',
//     score: 5,
//     title: '빛나는 영화',
//     content: '감정이 잘 전달되었습니다.',
//     reviewImage: review28,
//     creationDate: '2023-10-28',
//   },
//   {
//     id: 28,
//     userProfile: '',
//     userId: 'user29',
//     score: 4,
//     title: '재미있는 스릴러',
//     content: '긴장감이 유지되었습니다.',
//     reviewImage: review29,
//     creationDate: '2023-10-29',
//   },
//   {
//     id: 29,
//     userProfile: '',
//     userId: 'user30',
//     score: 5,
//     title: '완벽한 엔딩',
//     content: '결말이 너무 아름다웠습니다.',
//     reviewImage: review30,
//     creationDate: '2023-10-30',
//   },
// ]

// const reviewDummyData4 = [
//   {
//     id: 30,
//     userProfile: '',
//     userId: 'user31',
//     score: 4,
//     title: '감정이입이 잘 되는 영화',
//     content: '몰입감이 좋았습니다. 강력 추천!',
//     reviewImage: review31,
//     creationDate: '2023-10-31',
//   },
//   {
//     id: 31,
//     userProfile: '',
//     userId: 'user32',
//     score: 3,
//     title: '보통의 수준',
//     content: '전반적으로 무난했습니다.',
//     reviewImage: review32,
//     creationDate: '2023-11-01',
//   },
//   {
//     id: 32,
//     userProfile: '',
//     userId: 'user33',
//     score: 5,
//     title: '정말 훌륭한 작품',
//     content: '특히 음악이 뛰어났습니다.',
//     reviewImage: review33,
//     creationDate: '2023-11-02',
//   },
//   {
//     id: 33,
//     userProfile: '',
//     userId: 'user34',
//     score: 2,
//     title: '지루한 전개',
//     content: '스토리가 느렸습니다.',
//     reviewImage: review34,
//     creationDate: '2023-11-03',
//   },
//   {
//     id: 34,
//     userProfile: '',
//     userId: 'user35',
//     score: 4,
//     title: '재미있었습니다',
//     content: '긴장감이 뛰어났습니다.',
//     reviewImage: review35,
//     creationDate: '2023-11-04',
//   },
//   {
//     id: 35,
//     userProfile: '',
//     userId: 'user36',
//     score: 3,
//     title: '나쁘지 않았습니다',
//     content: '특별한 감동은 없었습니다.',
//     reviewImage: review36,
//     creationDate: '2023-11-05',
//   },
//   {
//     id: 36,
//     userProfile: '',
//     userId: 'user37',
//     score: 5,
//     title: '강력 추천',
//     content: '감정적으로 연결되었습니다.',
//     reviewImage: review37,
//     creationDate: '2023-11-06',
//   },
//   {
//     id: 37,
//     userProfile: '',
//     userId: 'user38',
//     score: 4,
//     title: '매력적인 스토리',
//     content: '스토리가 흥미로웠습니다.',
//     reviewImage: review38,
//     creationDate: '2023-11-07',
//   },
//   {
//     id: 38,
//     userProfile: '',
//     userId: 'user39',
//     score: 2,
//     title: '실망스러운 영화',
//     content: '기대 이하였습니다.',
//     reviewImage: review39,
//     creationDate: '2023-11-08',
//   },
//   {
//     id: 39,
//     userProfile: '',
//     userId: 'user40',
//     score: 5,
//     title: '감동적이었습니다',
//     content: '강력한 메시지가 있었습니다.',
//     reviewImage: review40,
//     creationDate: '2023-11-09',
//   },
// ]

// const reviewDummyData5 = [
//   {
//     id: 40,
//     userProfile: '',
//     userId: 'user41',
//     score: 4,
//     title: '감정의 깊이가 느껴졌습니다',
//     content: '훌륭한 작품이었습니다.',
//     reviewImage: review41,
//     creationDate: '2023-11-10',
//   },
//   {
//     id: 41,
//     userProfile: '',
//     userId: 'user42',
//     score: 3,
//     title: '무난한 영화',
//     content: '기대에 미치지 못했습니다.',
//     reviewImage: review42,
//     creationDate: '2023-11-11',
//   },
//   {
//     id: 42,
//     userProfile: '',
//     userId: 'user43',
//     score: 5,
//     title: '눈물 나는 영화',
//     content: '강한 감정선이 느껴졌습니다.',
//     reviewImage: review43,
//     creationDate: '2023-11-12',
//   },
//   {
//     id: 43,
//     userProfile: '',
//     userId: 'user44',
//     score: 2,
//     title: '지루한 전개',
//     content: '지루한 느낌이었습니다.',
//     reviewImage: review44,
//     creationDate: '2023-11-13',
//   },
//   {
//     id: 44,
//     userProfile: '',
//     userId: 'user45',
//     score: 4,
//     title: '재미있었습니다',
//     content: '전반적으로 좋았습니다.',
//     reviewImage: review45,
//     creationDate: '2023-11-14',
//   },
//   {
//     id: 45,
//     userProfile: '',
//     userId: 'user46',
//     score: 3,
//     title: '보통의 영화',
//     content: '기대 이하였습니다.',
//     reviewImage: review46,
//     creationDate: '2023-11-15',
//   },
//   {
//     id: 46,
//     userProfile: '',
//     userId: 'user47',
//     score: 5,
//     title: '명작입니다',
//     content: '정말 감동적이었습니다.',
//     reviewImage: review47,
//     creationDate: '2023-11-16',
//   },
//   {
//     id: 47,
//     userProfile: '',
//     userId: 'user48',
//     score: 4,
//     title: '인상 깊었습니다',
//     content: '캐릭터가 매력적이었습니다.',
//     reviewImage: review48,
//     creationDate: '2023-11-17',
//   },
//   {
//     id: 48,
//     userProfile: '',
//     userId: 'user49',
//     score: 2,
//     title: '실망했습니다',
//     content: '재미가 없었습니다.',
//     reviewImage: review49,
//     creationDate: '2023-11-18',
//   },
//   {
//     id: 49,
//     userProfile: '',
//     userId: 'user50',
//     score: 5,
//     title: '완벽한 영화',
//     content: '모든 것이 완벽했습니다.',
//     reviewImage: review50,
//     creationDate: '2023-11-19',
//   },
// ]

// const reviewDummyData6 = [
//   {
//     id: 50,
//     userProfile: '',
//     userId: 'user51',
//     score: 4,
//     title: '멋진 경험',
//     content: '감동적이고 멋진 영화였습니다.',
//     reviewImage: review51,
//     creationDate: '2023-11-20',
//   },
//   {
//     id: 51,
//     userProfile: '',
//     userId: 'user52',
//     score: 3,
//     title: '그냥 그랬어요',
//     content: '보통이었습니다.',
//     reviewImage: review52,
//     creationDate: '2023-11-21',
//   },
//   {
//     id: 52,
//     userProfile: '',
//     userId: 'user53',
//     score: 5,
//     title: '대단한 영화',
//     content: '모든 장면이 매력적이었습니다.',
//     reviewImage: review53,
//     creationDate: '2023-11-22',
//   },
//   {
//     id: 53,
//     userProfile: '',
//     userId: 'user54',
//     score: 2,
//     title: '실망스러움',
//     content: '예상보다 못한 작품이었습니다.',
//     reviewImage: review54,
//     creationDate: '2023-11-23',
//   },
//   {
//     id: 54,
//     userProfile: '',
//     userId: 'user55',
//     score: 4,
//     title: '아름다운 이야기',
//     content: '감정이 잘 표현된 영화였습니다.',
//     reviewImage: review55,
//     creationDate: '2023-11-24',
//   },
//   {
//     id: 55,
//     userProfile: '',
//     userId: 'user56',
//     score: 3,
//     title: '무난한 수준',
//     content: '기대 이하였습니다.',
//     reviewImage: review56,
//     creationDate: '2023-11-25',
//   },
//   {
//     id: 56,
//     userProfile: '',
//     userId: 'user57',
//     score: 5,
//     title: '인생 영화',
//     content: '감동적인 순간이 많았습니다.',
//     reviewImage: review57,
//     creationDate: '2023-11-26',
//   },
//   {
//     id: 57,
//     userProfile: '',
//     userId: 'user58',
//     score: 4,
//     title: '재미있었습니다',
//     content: '흥미로운 요소가 많았습니다.',
//     reviewImage: review58,
//     creationDate: '2023-11-27',
//   },
//   {
//     id: 58,
//     userProfile: '',
//     userId: 'user59',
//     score: 2,
//     title: '지루한 전개',
//     content: '기대 이하의 전개였습니다.',
//     reviewImage: review59,
//     creationDate: '2023-11-28',
//   },
//   {
//     id: 59,
//     userProfile: '',
//     userId: 'user60',
//     score: 5,
//     title: '완벽한 작품',
//     content: '모든 요소가 조화를 이루었습니다.',
//     reviewImage: review60,
//     creationDate: '2023-11-29',
//   },
// ]

const Detail = () => {
  const [movie, setMovie] = useState(dummyData)
  const [image1, setImage1] = useState<string | null>(null)
  const [reviews, setReviews] = useState<Review[]>(reviewDummyData1)
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
              {reviews.map((review, index) => (
                <UserRiviewBox key={index}>
                  <RiviewImgBox>
                    <RiviewImg src={review.reviewImage} alt='사람들이 업로드한 이미지' />
                  </RiviewImgBox>
                  <RiviewInfoBox>
                    <RiviewUserInfo>
                      <UserInfoHolder>
                        <ProfileBadge src='' width='3.2rem' height='3.2rem' />

                        <UserInfoBox>
                          <UserId>{review.userId}</UserId>
                          <CreationDate>{review.creationDate}</CreationDate>
                        </UserInfoBox>
                      </UserInfoHolder>
                      <StarRating value={review.score} disabled={true} />
                    </RiviewUserInfo>
                    <RiviewTitle>{review.title}</RiviewTitle>
                    <RiviewContent>{review.content}</RiviewContent>
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
