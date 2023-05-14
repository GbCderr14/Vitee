import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Define the interface for the data returned from the API
interface Post {
  id: number;
  userId: number;
  title: string; 
  body: string;
}

const SecondPage= () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  // Define the columns for the data grid
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userId', headerName: 'User-id', width: 120 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid rows={posts} columns={columns}  initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}/>
    </div>
  );
};

export default SecondPage;
