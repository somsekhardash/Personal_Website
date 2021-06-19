import React, { useEffect, useState } from "react";
import { FormBuilder } from "./FormBuilder";
// import HeaderDefinition from "../schemas/HeaderSchema";
import merge from "deepmerge";
import useHttp from "../share/UseHttp";
import {
  Button,
  Loader,
  Divider,
  Grid,
  Segment,
  Icon,
} from "semantic-ui-react";
import { useBuilder } from "../share/useBuilder";
import { useRemaker } from "../share/useReMaker";

const HeaderForm = ({ HeaderDefinition, setAbout }: any) => {
  const { builderSchema, onSchemaChange } = useBuilder(HeaderDefinition);
  const { revSchema } = useRemaker(builderSchema, HeaderDefinition);

  const saveForm = () => {
    setAbout(JSON.stringify(revSchema));
  };

  return (
    <div className="dash" id="about">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <FormBuilder schema={HeaderDefinition} onChange={onSchemaChange} />
          </Grid.Column>
          <Grid.Column>
            <pre>{JSON.stringify(revSchema, null, 4)}</pre>
          </Grid.Column>
          {/* <Grid.Column>
            <pre>{JSON.stringify(builderSchema, null, 4)}</pre>
          </Grid.Column> */}
          <button className="ui secondary button" onClick={() => saveForm()}>
            Save
          </button>
        </Grid>
      </Segment>
    </div>
  );
};

export { HeaderForm };
