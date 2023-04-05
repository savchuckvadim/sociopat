import { useParams } from "react-router-dom";


type WithRouterProps<P> = P & {
    params: ReturnType<typeof useParams>;
};

const WithRouter = <Props extends {}>(
    WrappedComponent: React.ComponentType<WithRouterProps<Props>>
): React.FC<Props> => {
    return (props: Props) => {
        const params = useParams ();

        return <WrappedComponent {...props} params={params} />;
    };
};

export default WithRouter