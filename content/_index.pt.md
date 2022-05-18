---
title: "Organic Maps: Caminhadas, Ciclismo, Trilhas e Navegação offline"
description: Mapas offline detalhados e rápidos para viajantes, turistas, caminhantes e ciclistas, baseados em OpenStreetMap e curados com amor por fundadores de MapsWithMe (Maps.Me).
page_template: index.html
sort_by: weight
extra:
  menu_title: Inicio
---

**Organic Maps** é um app gratuito de mapas offline para Android & iOS,
destinado para viajantes, turistas, excursionistas e ciclistas, 
baseado em dados do projeto de colaboração coletiva **OpenStreetMap** 
e curado com amor por fundadores de MapsWithMe (Maps.Me).

<p id='install'>

{{ badge(url='https://apps.apple.com/app/organic-maps/id1567437057', img='apple-appstore.svg', title='Install Organic Maps from the AppStore') }}

{{ badge(url='https://play.google.com/store/apps/details?id=app.organicmaps', img='googleplay.svg', title='Install Organic Maps from Google Play') }}

{{ badge(url='https://f-droid.org/en/packages/app.organicmaps/', img='f-droid.svg', title='Install Organic Maps from F-Droid') }}

{{ badge(url='https://appgallery.huawei.com/#/app/C104325611', img='huawei-appgallery.png', title='Install Organic Maps from Huawei AppGallery') }}

</p>

{{ screenshot(src='images/screenshots/hiking.jpg', alt='Hiking') }}
{{ screenshot(src='images/screenshots/prague.jpg', alt='Prague') }}
{{ screenshot(src='images/screenshots/search.jpg', alt='Offline Search') }}
{{ screenshot(src='images/screenshots/dark.jpg', alt='Navigation in dark mode') }}

## Funcionalidades

Organic Maps app é um verdadeiro companheiro para viajantes, turistas, excursionistas e ciclistas:

- Mapas offline detalhados com lugares que não existem em outros mapas, graças a [OpenStreetMap](https://osm.org)
- Rotas para ciclistas, trilhas e áreas para caminhadas
- Linhas de contorno, perfis de elevação, picos e declives
- Caminhadas, ciclismo e navegação de carro com orientação por voz
- Busca rápida no mapa offline
- Exportação e importação de favoritos em formatos como KML/KMZ (GPX está em [planos](https://github.com/organicmaps/organicmaps/issues/624))
- Modo escuro para proteger sua vista
- Países e regiões não ocupam muito espaço
- Software livre de código aberto

## Por que Organic?

Organic Maps é puro e orgânico, feito com amor:

- Respeita sua privacidade
- Economiza sua bateria
- Sem taxas de dados móveis imprevistas

Organic Maps é livre de rastreadores e outras coisas ruins:

- Sem anúncios
- Sem rastreamento
- Sem coleta de dados
- Sem conexões aos servidores externos
- Sem registros desnecessários
- Sem tutoriais obrigatórios
- Sem spam por e-mail
- Sem notificações push
- Sem características maliciosas
- ~~Sem pesticidas~~ Puramente orgânico!

O aplicativo é verificado por <a href='https://reports.exodus-privacy.eu.org/en/reports/app.organicmaps/latest/'>Exodus Privacy Project</a>:
<br/>
<img src='images/privacy/exodus.png' width='400'>

Organic Maps não pede permissões desnecessárias para te espionar:

<img src='images/privacy/om.jpg' width='400'>
<img src='images/privacy/mm.jpg' width='400'>

Organic Maps acredita que a privacidade é um direito humano fundamental:

- Organic Maps é um projeto indie de iniciativa comunitária
- Protegemos sua privacidade contra os olhos curiosos da Big Tech
- Fique protegido, não importa onde você esteja

Rejeite a vigilância - abrace sua liberdade.


<a href="#install"><strong>Experimente o Organic Maps!</strong></a>

## Quem está pagando pelo aplicativo gratuito?

O app é gratuito para todos. Por favor, [faça uma doação](@/donate/index.md) para nos apoiar!

{{ donate_buttons() }}

### Nossos patrocinadores

[Provedor Mythic Beasts](https://www.mythic-beasts.com/) ISP [nos fornece](https://www.mythic-beasts.com/blog/2021/10/06/improving-the-world-bit-by-expensive-bit/)
dois servidores com 400 TB/mês de banda larga grátis para facilitar a nossos usuários 
downloads e atualizações de mapas.

### Apoie nosso projeto
Há muitas maneiras de nos apoiar, veja [aqui](@/support-us/index.md).

## Beta

Por favor, junte-se a nosso programa beta, sugira novas funcionalidades e relate os problemas::

- [iOS Beta (TestFlight)](https://testflight.apple.com/join/lrKCl08I)
- [Android Beta (Firebase)](https://appdistribution.firebase.dev/i/9ec3bca5e2b47373)

## Comunidade

Organic Maps é um [software de código-fonte aberto](https://github.com/organicmaps/organicmaps)
sob a licença Apache License 2.0.

- Relate as falhas ou problemas para o [rastreador de problemas](https://github.com/organicmaps/organicmaps/issues) ou [envie um e-mail](mailto:hello@organicmaps.app).
- [Conversa](https://github.com/organicmaps/organicmaps/discussions/categories/ideas) sobre idéias ou peça novas funcionalidades.
- Assine nosso [canal no Telegram](https://t.me/OrganicMapsApp) ou nosso [espaço [matrix]](https://matrix.to/#/#organicmaps:matrix.org) para atualizações.
- Junte-se ao nosso [grupo no Telegram](https://t.me/OrganicMaps) para conversar com outros usuários.
- Присоединяйтесь к нашей [русскоязычной группе в Telegram](https://t.me/OrganicMapsRu) для обратной связи и помощи.
- Diğer kullanıcılarla tartışmak için [Telegram Grubumuza](https://t.me/OrganicMapsTR) katılın.
- Visite nosso [site no GitHub](https://github.com/organicmaps/organicmaps).
- Acompanhe nossas atualizações no [Facebook](https://facebook.com/OrganicMaps), [Twitter](https://twitter.com/OrganicMapsApp),
[Instagram](https://instagram.com/organicmaps.app/).

<button id='add' class='installButton'>
  Instale da loja Google Play
</button>

<script>
  // https://developers.google.com/web/fundamentals/app-install-banners/native
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    const add = document.getElementById('add');
    add.style.display = 'block';
    add.onclick = () => {
      e.prompt();
    }
  });
</script>
