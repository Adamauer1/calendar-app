import {
  Flex,
  Group,
  Image,
  Text,
  rem,
  Divider,
  Burger,
  Drawer,
} from '@mantine/core'
import { Link, useRouter } from '@tanstack/react-router'
// import { ApiBaseUrl } from '@/utils/utils';
import { useDisclosure } from '@mantine/hooks'

export default function Header() {
  const router = useRouter()
  const [burgerOpened, { toggle: burgerToggle }] = useDisclosure()
  return (
    <header>
      <Flex justify={'space-between'} align={'center'}>
        <Image
          src="/logo192.png"
          w={{ base: 120, md: 180, lg: 180, xl: 180 }}
          h={{ base: 60, md: 80, lg: 80, xl: 80 }}
          // onClick={() => router.navigate({ to: '/calendar' })}
          style={{ cursor: 'pointer' }}
        />
        <nav>
          <Group
            visibleFrom="md"
            gap={rem(30)}
            styles={{ root: { marginRight: rem(60) } }}
          >
            <Text
              component={Link}
              to={'/calendar'}
              size="lg"
              styles={{ root: { color: 'black', fontWeight: 'bold' } }}
            >
              Calendar
            </Text>
            <Text
              component={Link}
              to={'/patients'}
              size="lg"
              styles={{ root: { color: 'black', fontWeight: 'bold' } }}
            >
              Patients
            </Text>
            <Text
              component={Link}
              to={'/employeePanel'}
              size="lg"
              styles={{ root: { color: 'black', fontWeight: 'bold' } }}
            >
              Employee Panel
            </Text>
            <Text
              component={Link}
              // to={"/"}
              // onClick={async () => {
              // await fetch(`${ApiBaseUrl}/authentication/logout`, {
              //   method: 'POST',
              //   credentials: 'include',
              // })
              //   2

              //   await router.navigate({ to: '/' })
              // }}
              size="lg"
              styles={{ root: { color: 'black', fontWeight: 'bold' } }}
            >
              Logout
            </Text>
          </Group>
        </nav>
        <Burger
          opened={burgerOpened}
          onClick={burgerToggle}
          hiddenFrom={'md'}
          pr={10}
        />
        <Drawer
          opened={burgerOpened}
          onClose={burgerToggle}
          size={'sm'}
          position={'right'}
          styles={{ body: { height: '90%' } }}
        >
          <Flex direction={'column'} justify={'space-between'} h={'100%'}>
            <Flex direction={'column'}>
              <Divider />
              <Text
                component={Link}
                to={'/calendar'}
                size="lg"
                styles={{ root: { color: 'black', fontWeight: 'bold' } }}
              >
                Calendar
              </Text>
              <Text
                component={Link}
                to={'/patients'}
                size="lg"
                styles={{ root: { color: 'black', fontWeight: 'bold' } }}
              >
                Patients
              </Text>
              <Text
                component={Link}
                to={'/employeePanel'}
                size="lg"
                styles={{ root: { color: 'black', fontWeight: 'bold' } }}
              >
                Employee Panel
              </Text>
            </Flex>
            <Flex direction={'column'}>
              <Divider />
              <Text
                component={Link}
                // to={"/"}
                // onClick={async () => {
                //   await fetch(`${ApiBaseUrl}/authentication/logout`, {
                //     method: 'POST',
                //     credentials: 'include',
                //   })

                //   await router.navigate({ to: '/' })
                // }}
                size="lg"
                styles={{ root: { color: 'black', fontWeight: 'bold' } }}
              >
                Logout
              </Text>
            </Flex>
          </Flex>
        </Drawer>
      </Flex>
      <Divider />
    </header>
  )
}
