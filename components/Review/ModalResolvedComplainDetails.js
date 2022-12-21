import React, { useState } from 'react';
import {
  Modal,
  Grid,
  Image,
  Card,
  Icon,
  Divider,
  Header,
  CardContent,
  Button,
  Comment,
} from 'semantic-ui-react';
import calculateTime from '../../utils/calculateTime';
import CommentComplain from '../Complain/CommentComplain';
import ModalComplainHistory from '../Complain/ModalComplainHistory';

function ModalResolvedComplainDetails({ user, complain }) {
  const [comments, setComments] = useState(complain.comments);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [passComplain, setPassComplain] = useState(complain);
  const [reviewers, setReviewers] = useState(complain.reviewer);

  return (
    <div>
      <Modal.Header>Detailed View</Modal.Header>
      <Modal.Content>
        <Card fluid>
          <Card.Content>
            <Card.Header>{complain.title}</Card.Header>
            <Card.Meta>{calculateTime(complain.createdAt)}</Card.Meta>
            <Card.Meta>Version: {complain.versionNumber}</Card.Meta>
          </Card.Content>

          <Card.Content>{complain.complain}</Card.Content>

          <Card.Content>
            <Image.Group size="medium">
              {complain.evidence.map((evidence) => (
                <Image
                  src={evidence}
                  style={{ height: '200px', width: '200px' }}
                />
              ))}
            </Image.Group>
          </Card.Content>

          <Card.Content>
            <Card.Group>
              <Card color="green">
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={complain.complainer.image}
                  />
                  <Card.Header>{complain.complainer.name}</Card.Header>
                  <Card.Meta>Complainer</Card.Meta>
                </Card.Content>
              </Card>

              <Card color="red">
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={complain.faulty.image}
                  />
                  <Card.Header>{complain.faulty.name}</Card.Header>
                  <Card.Meta>Accused</Card.Meta>
                </Card.Content>
              </Card>

              {reviewers.length > 0 && 
          reviewers.map((reviewer) => (
            <Card color="blue">
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={reviewer._id.image}
                  />
                  <Card.Header>{reviewer._id.name}</Card.Header>
                  <Card.Meta>Reviewer</Card.Meta>
                </Card.Content>
              </Card>
        ))}
            </Card.Group>
          </Card.Content>

          <Card.Content>
            <Header as="h3" dividing>
              Status
            </Header>
            {comments.length > 0 &&
              comments.map((comment) => (
                <CommentComplain
                  key={comment._id}
                  comment={comment}
                  setComments={setComments}
                />
              ))}

            <Divider hidden />
          </Card.Content>

          <Card.Content color="red">
            <Header as="h3" dividing>
              Comlpain Colsed
            </Header>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src={complain.statusCloser.image} />
                <Comment.Content>
                  <Comment.Author as="a">
                    {complain.statusCloser.name}
                  </Comment.Author>

                  <Comment.Metadata>
                    {calculateTime(complain.statusDate)}
                  </Comment.Metadata>

                  <Comment.Text>{complain.statusComment}</Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Card.Content>

          <Card.Content>
            <Card.Meta>
              <Button
                content="History"
                floated="left"
                color="grey"
                onClick={() => setShowHistoryModal(true)}
              />
            </Card.Meta>
          </Card.Content>
        </Card>
      </Modal.Content>

      {showHistoryModal && (
        <Modal
          closeIcon
          closeOnDimmerClick
          centered
          onClose={() => setShowHistoryModal(false)}
          open={showHistoryModal}
        >
          <Modal.Content scrolling>
            <ModalComplainHistory user={user} complain={passComplain} />
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
}

export default ModalResolvedComplainDetails;
