Things I need to do:

implement catch error handling



<Form >
            <Row >
              <Col >
                <Form.Control
                  type="text"
                  ref={this.googleField}
                  name="city"
                  placeholder="Enter a city or region" 
                />
              </Col>
              <Col > 
              <Button variant="outline-warning" onClick={this.handleSubmit}>Add Place</Button>
              </Col>
              </Row>
            
          </Form>