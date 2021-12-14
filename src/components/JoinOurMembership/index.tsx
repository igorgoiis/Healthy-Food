import { SectionContainer, Content } from './styles';

const JoinOurMembership = () => {
  return (
    <SectionContainer>
      <Content>
        <h3>Join our membership<br/> to get special offer</h3>
        <div>
          <input type="text" placeholder="Enter your email address" />
          <button>
            Join
          </button>
        </div>
      </Content>
    </SectionContainer>
  )
}

export default JoinOurMembership;