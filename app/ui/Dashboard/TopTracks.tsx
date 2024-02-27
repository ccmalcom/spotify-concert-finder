import { PropagateLoader } from "react-spinners";
import TrackCard from "./TrackCard";
import { useTopTracks } from "@/app/utils/hooks";

export default function TopTracks() {
    const { topTracks, isLoading, isError } = useTopTracks();

    return (
        <div className="col-span-3 text-center min-h-[70vh] min-w-[60vw]">
            <h1>Top Tracks</h1>
            {isLoading ? (
                <div className="flex justify-center items-center h-full w-full"> 
                <PropagateLoader color='#1BD760' size={15} />
                </div>
            ) : isError ? (
                <div>Error loading top tracks...</div>
            ) : (
                <div className="grid grid-cols-3">
                    {topTracks.map((track: any) => {
                        // console.log('track:', track);
                        return (
                            <TrackCard track={track} key={track.id} />
                        )
                    })}
            </div>
            )}

            
        </div>
    );
}