import React, {lazy, Suspense, useState } from 'react';
import {Card, Segment, Grid, Icon, Button, Dimmer, Loader} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

export const Eventview = () => {
  
  return (
      <div>
      <Card fluid>
        <Segment.Group style={{marginBottom: 0}}>
          <Segment>
            <Grid columns={2}>
              <Grid.Column width={1} className="centerElement">
                <Icon color='teal' name='info' size='large'/>
              </Grid.Column>
              <Grid.Column width={5} className='centerElement'>
                description
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={2}>
              <Grid.Column width={1} className='centerElement'>
                <Icon color='teal' name='calendar alternate outline' size='large'/>
              </Grid.Column>
              <Grid.Column width={15} className='centerElement'>
                date and time
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Grid columns={3}>
              <Grid.Column width={1} className='centerElement'>
                <Icon color='teal' name='map marker alternate' size='large'/>
              </Grid.Column>
              <Grid.Column width={11} className='centerElement'>
                zoom
              </Grid.Column>
              <Grid.Column width={4}>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
        
      </Card>
    </div>
  );
};