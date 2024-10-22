import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

type Item = {
  id: number;
  name: string;
};

// Sample data
const items: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// GET all items
app.get('/items', (req: Request, res: Response) => {
  res.json(items);
});

// POST a new item
app.post('/items', (req: Request, res: Response) => {
  const newItem: Item = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

