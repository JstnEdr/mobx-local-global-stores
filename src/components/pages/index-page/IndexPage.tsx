import React from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { MainOverview } from './main-overview/MainOverview';
import { Actors } from './actors/Actors';
import { observer } from 'mobx-react-lite';
import { IndexPageStore } from './IndexPage.store';
import { useLocalStore } from '../../shared/local-store-provider/LocalStoreProvider';
import { defaultShowId } from 'domains/shows/shows.constants';
import { useGetShowDetailsAndCastByShowIdQuery } from 'domains/shows/shows.graphql';

interface IProps {}

export const IndexPage: React.FC<IProps> = observer((props) => {
  const { loading } = useGetShowDetailsAndCastByShowIdQuery({
    variables: {
      showId: defaultShowId,
    },
  });

  return (
    <LoadingIndicator isActive={loading}>
      <MainOverview />
      <Divider horizontal={true}>
        <Header as="h4">
          <Icon name="users" /> Actors
        </Header>
      </Divider>
      <Actors />
    </LoadingIndicator>
  );
});

IndexPage.displayName = 'IndexPage';
IndexPage.defaultProps = {};
