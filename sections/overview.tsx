import Container from "@/components/custom/layouts/container";
import { Button } from "@/components/ui/button";

export default function OverViewPage() {
  return (
    <Container scrollable>
      <div className="space-y-2 ">
        <div className="flex items-center justify-between space-y-2">
          <h2 data-id="title" className="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <Button>Download</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
