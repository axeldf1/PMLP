/**
import { Button, Group } from "@mantine/core";

export default function IndexPage() {
  return (
    <Group mt={50} justify="center">
      <Button size="xl">Welcome to Mantine!</Button>
    </Group>
  );
}
 */

import { Button, Container, Grid, Title, Text, Card, Group } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
    return (
        <Container>
            {/* Section de bienvenue */}
            <Title order={1} mt="xl">Bienvenue sur Prends moi la patte !</Title>
            <Text size="lg" mt="md">
                Loremp lipsum.
            </Text>

            {/* Appel aux dons */}
            <Card shadow="sm" p="lg" mt="xl">
                <Title order={2}>Soutenez notre cause</Title>
                <Text mt="md">
                    Votre soutien est essentiel pour permettre à notre association de continuer ses actions. Chaque don compte !
                </Text>
                <Link href="/don">
                    <Button mt="lg" color="green">Faire un don</Button>
                </Link>
            </Card>

            {/* Navigation vers les autres sections */}
            <Grid mt="xl">
                <Grid.Col span={6}>
                    <Card shadow="sm" p="lg">
                        <Title order={3}>Rejoindre notre réseau</Title>
                        <Text>Devenez famille d&apos;accueil et aidez-nous à accompagner les familles dans le besoin.</Text>
                        <Link href="/candidatures">
                            <Button mt="lg">Déposer une candidature</Button>
                        </Link>
                    </Card>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Card shadow="sm" p="lg">
                        <Title order={3}>Espace Investisseurs</Title>
                        <Text>Découvrez comment nous travaillons avec nos investisseurs pour un avenir solidaire.</Text>
                        <Link href="/investisseurs">
                            <Button mt="lg">Espace Investisseurs</Button>
                        </Link>
                    </Card>
                </Grid.Col>
                <Grid.Col span={6} mt="lg">
                    <Card shadow="sm" p="lg">
                        <Title order={3}>Nos réalisations</Title>
                        <Text>Découvrez les actions concrètes que nous avons menées grâce à votre soutien.</Text>
                        <Link href="/realisations">
                            <Button mt="lg">Voir nos réalisations</Button>
                        </Link>
                    </Card>
                </Grid.Col>
                <Grid.Col span={6} mt="lg">
                    <Card shadow="sm" p="lg">
                        <Title order={3}>Contact</Title>
                        <Text>Besoin de plus d&apos;informations ? Contactez notre équipe pour en savoir plus.</Text>
                        <Link href="/contact">
                            <Button mt="lg">Nous contacter</Button>
                        </Link>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
