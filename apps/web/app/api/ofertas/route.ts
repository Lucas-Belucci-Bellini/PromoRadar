import { deals } from '../../../lib/demo-data';

export async function GET() {
  return Response.json({
    source: 'demo',
    realtime: false,
    count: deals.length,
    items: deals,
  });
}
