import AwarenesssArea from "./ui/AwarenessArea";
import RegulationByProdcuts from "./ui/RegulationByProducts";
import SlickCarrousel from "./ui/SlickCarrousel";
import StepsBySteps from "./ui/StepsBySteps";

export default function PublicHome() {
    return (
        <>
            <SlickCarrousel />
            <StepsBySteps />
            <RegulationByProdcuts />
            <AwarenesssArea />
        </>
    )
}