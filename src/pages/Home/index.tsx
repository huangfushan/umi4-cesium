import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import Cesium from '@/components/Cesium';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Cesium />
      </div>
    </PageContainer>
  );
};

export default HomePage;
