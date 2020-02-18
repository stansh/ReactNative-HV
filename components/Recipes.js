import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, ListGroupItem, ListGroup } from 'reactstrap';

const R1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      <Button  outline color="success" size="lg" block onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #1</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ListGroup>
                  <ListGroupItem>Puree the first seven ingredients in a food processor until smooth</ListGroupItem>
                  <ListGroupItem>Add in the chickpeas</ListGroupItem>
                  <ListGroupItem>Puree for 3-4 minutes, or until smooth</ListGroupItem>
                  <ListGroupItem>Taste and season</ListGroupItem>
                  <ListGroupItem>Garnish and serve</ListGroupItem>
              </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
const R2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      <Button outline color="success" size="lg" block  onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #2</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ListGroup>
                    <ListGroupItem>Place the chickpeas in a medium saucepan and add the baking soda</ListGroupItem>
                    <ListGroupItem>Add the tahini to the food processor and blend until the mixture is thick and creamy</ListGroupItem>
                    <ListGroupItem>While running the food processor, drizzle in 2 tablespoons ice water </ListGroupItem>
                    <ListGroupItem>Add the cumin and the drained, over-cooked chickpeas to the food processor</ListGroupItem>
                    <ListGroupItem>Taste, and adjust as necessary</ListGroupItem>
                    <ListGroupItem>Scrape the hummus into a serving bowl or platter, and use a spoon to create nice swooshes on top</ListGroupItem>
              </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

const R3 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      <Button outline color="success" size="lg" block  onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #3</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ListGroup>
                    <ListGroupItem>In the bowl of a food processor, combine the tahini and lemon juice and process for 1 minute, scrape the sides and bottom of the bowl then process for 30 seconds more</ListGroupItem>
                    <ListGroupItem>Add the olive oil, minced garlic, cumin, and a 1/2 teaspoon of salt to the whipped tahini and lemon juice</ListGroupItem>
                    <ListGroupItem>With the food processor turned on, slowly add 2 to 3 tablespoons of water until you reach the perfect consistency</ListGroupItem>
                    <ListGroupItem>Taste for salt and adjust as needed. Serve hummus with a drizzle of olive oil and dash of paprika</ListGroupItem>
              </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
const R4 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "row">
      <Button outline color="success" size="lg" block  onClick={toggle} style={{ marginBottom: '1rem' }}>Recipe #4</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              <ListGroup>
                   <ListGroupItem>Add all the ingredients to your Vitamix or high-powered blender and secure the lid. Remove the lid cap and insert the tamper</ListGroupItem>
                    <ListGroupItem>Turn the blender on high for 30 seconds (or more for a creamier texture) and use the tamper to push the hummus into the blades. Add more chickpea liquid (aquafaba), if desired, for a softer hummus</ListGroupItem>
                    <ListGroupItem>Add the hummus to a serving plate and garnish with olive oil, paprika and fresh parsley.</ListGroupItem>
                    <ListGroupItem>The hummus will last for up to a week in the fridge, if kept in a sealed container. You can also freeze the hummus in sealed containers for future use, then just thaw as needed. It's actually one of the most common foods I meal prep on a regular basis as it's so easy</ListGroupItem>
              </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}



const Recipes = () =>{
  return(
    <div className ='container'>
      
      <R1 />
      <R2 />
      <R3 />
      <R4 />
      
    </div>
  );
}


export default Recipes;