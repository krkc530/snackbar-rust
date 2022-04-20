import { PageHeader } from 'antd';

function MyHeader() {
    return (
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Header"
            subTitle="This is a header"
        />
    );
}
export default MyHeader

