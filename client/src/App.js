import React from "react";
import {
  RecoilRoot,
} from 'recoil';
import "./App.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import TodoItemCreator from "./components/TodoItemCreator";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Container>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" >
              Pekerjaan Rumah Yang Perlu Dilakukan
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <TodoItemCreator />
              <TodoList />
            </Box>
          </Box>
        </Container>
      </div>
    </RecoilRoot>
  );
}

export default App;
