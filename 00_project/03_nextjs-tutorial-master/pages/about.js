import {
  Button,
  Divider,
  Form,
  Header,
  List,
  TextArea,
} from "semantic-ui-react";

export default function About() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        Introduction
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:markjames12210@gmail.com">markjames12210@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        Support
      </Header>
      <Divider />
      <Form>
        <Form.Field>
          <label>Title</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>Content</label>
          <TextArea />
        </Form.Field>
        <Button color="green">Submit</Button>
      </Form>
    </div>
  );
}
