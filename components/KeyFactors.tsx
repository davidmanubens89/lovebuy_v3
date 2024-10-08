import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Factor {
  title: string;
  description: string;
}

interface KeyFactorsProps {
  factors: Factor[];
}

export function KeyFactors({ factors }: KeyFactorsProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Key Factors to Consider</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {factors.map((factor, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{factor.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{factor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}