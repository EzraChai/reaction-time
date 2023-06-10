import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function Record({ times }: { times: any }) {
  if (times[0]) {
    return (
      <ScrollArea className="w-48 border-2 border-black rounded-md h-72">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-semibold leading-none medium">
            Reaction Time
          </h4>
          {times.map((time: any, index: number) => (
            <>
              <div className="text-sm" key={index}>
                {time.valueOf()}ms
              </div>
              <Separator className="my-2 " />
            </>
          ))}
        </div>
      </ScrollArea>
    );
  }
}
