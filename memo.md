Things I need to do:

implement catch error handling



Add the lng and lat values of a new place to the rails db on #create, use that value to center map when link is clicked

<Form className="place-input" onSubmit={this.handleSubmit}>
          <InputGroup size = "lg" className="mb-3">
              <Form.Control className="form-text"
                placeholder="city or town"
                aria-label="City or town"
                aria-describedby="basic-addon2"
                ref = {this.googleField}
              />
           <InputGroup.Append>
              <Button variant="outline-secondary">Add</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>