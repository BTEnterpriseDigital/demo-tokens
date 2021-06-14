import {
  Base,
  Columns,
  Heading,
  Section,
  SiteHeader,
  Surface,
  Text,
  UniversalHeader,
  VerticalSpace,
} from '@arc-ui/components';

function App() {
  return (
    <Base>
      <UniversalHeader>
        <UniversalHeader.Item href="https://www.bt.com/">
          For the home
        </UniversalHeader.Item>
        <UniversalHeader.Item href="https://business.bt.com/">
          For business and public sector
        </UniversalHeader.Item>
        <UniversalHeader.Item href="https://www.globalservices.bt.com/en">
          For global business
        </UniversalHeader.Item>
        <UniversalHeader.Item href="https://www.bt.com/about/coronavirus">
          Coronavirus
        </UniversalHeader.Item>
      </UniversalHeader>
      <SiteHeader
        secondaryItems={
          <SiteHeader.Item href="https://secure.business.bt.com/Hub">
            Login/Register
          </SiteHeader.Item>
        }
      >
        <SiteHeader.Item href="https://business.bt.com/products/">
          Products & services
        </SiteHeader.Item>
        <SiteHeader.Item href="https://business.bt.com/insights/">
          Insights
        </SiteHeader.Item>
        <SiteHeader.Item href="https://btbusiness.custhelp.com/app/home/">
          Help
        </SiteHeader.Item>
      </SiteHeader>
      <Surface background="light" paddingVertical="32">
        <Section>
          <Columns>
            <Columns.Col span={0} spanM={1} />
            <Columns.Col spanM={10}>
              <Surface background="white" padding="24">
                <Heading color="brand" level="2" size="l">
                  Full Fibre 150
                </Heading>
                <VerticalSpace size="12" />
                <Surface background="light" paddingVertical="12">
                  <div className="my-FibreSpeed">
                    <div>
                      <span className="my-FibreSpeed-mbps">150</span>{' '}
                      <Text isInline size="xs">
                        <b>Mbps</b>
                      </Text>
                      <Text size="xs">
                        <b>Download speed</b>
                      </Text>
                    </div>
                    <div>
                      <span className="my-FibreSpeed-mbps">27</span>{' '}
                      <Text isInline size="xs">
                        <b>Mbps</b>
                      </Text>
                      <Text size="xs">
                        <b>Upload speed</b>
                      </Text>
                    </div>
                  </div>
                </Surface>
                <VerticalSpace size="16" />
                <Heading color="brand" level="3" size="s">
                  Ideal for:
                </Heading>
                <Text>
                  Start-ups or small businesses looking for simple, fast and
                  reliable&nbsp;broadband
                </Text>
              </Surface>
            </Columns.Col>
          </Columns>
        </Section>
      </Surface>
    </Base>
  );
}

export default App;
