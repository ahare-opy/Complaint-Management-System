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
} from 'semantic-ui-react';
import calculateTime from '../../utils/calculateTime';
import CommentComplain from '../Complain/CommentComplain';
import CommentInputField from '../Complain/CommentInputFields';
import ModalComplainHistory from '../Complain/ModalComplainHistory';
import ComplainCloseInputField from './ComplainCloseInputField';

function ModalReviewDetails({ user, complain }) {
  const [comments, setComments] = useState(complain.comments);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [passComplain, setPassComplain] = useState(complain);

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

              <Card color="blue">
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={complain.reviewer.image}
                  />
                  <Card.Header>{complain.reviewer.name}</Card.Header>
                  <Card.Meta>Reviewer</Card.Meta>
                </Card.Content>
              </Card>
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

            <CommentInputField
              user={user}
              complainID={complain._id}
              setComments={setComments}
            />
          </Card.Content>

          <Card.Content>
            <Header as="h3" dividing>
              Close Complain
            </Header>

            <ComplainCloseInputField
              user={user}
              complainID={complain._id}
              setComments={setComments}
            />
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

export default ModalReviewDetails;
