import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { ImageCard, CardContent } from '../elements/cards';
import { CardHeader, Text, SubText } from '../elements/text';
import { BackgroundContainer, ContentContainer, GridContainer } from '../elements/containers';
import { IPost } from '../utils';

const Posts = ({ allPosts }) => (
  <BackgroundContainer>
    <ContentContainer>
      <GridContainer>
        {allPosts?.map(({ date, title, excerpt, coverImage, slug }: IPost) => (
          <Link href={`/blog/${slug}`} key={slug}>
            <ImageCard key={title}>
              <Image
                src={coverImage.url}
                alt={title}
                width={300}
                height={200}
                layout="responsive"
              />
              <CardContent>
                <SubText>{moment(date).format('MMMM D, YYYY')}</SubText>
                <CardHeader style={{ margin: '1rem 0' }}>{title}</CardHeader>
                <Text>{excerpt}</Text>
              </CardContent>
            </ImageCard>
          </Link>
        ))}
      </GridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Posts;
