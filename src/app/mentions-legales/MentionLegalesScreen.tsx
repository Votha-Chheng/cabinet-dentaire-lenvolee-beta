"use client"

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import React, { FC } from 'react'

const MentionLegalesScreen: FC = () => {
  const liStyle = `mb-2.5 text-lg font-bold`
  const pStyle = `px-2 tablet:px-8 text-main-theme text-xl leading-8 tablet:text-2xl tablet:leading-10 indent-5 tablet:indent-10 text-justify`

  const nomDuSite = "www.cabinetdentaire-lenvolee.fr"
  const nom ="Sylvie MA-FRANCIN"
  const propriAdresse = "Sylvie MA-FRANCIN résidant à Montpellier (34000)"
  const creator="Votha Chheng"
  const email="cabinetdentaire.lenvolee@gmail.com"

  return (
    <>
      <PageHeader img='mentions-legales.jpg' title='Mentions légales'/>
      <PageContainer>
        <PageSection subtitle="Présentation du site" delayBoolean={true} >
          <p className={pStyle}>
            En vertu de l&rsquo;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&rsquo;économie numérique, il est précisé aux utilisateurs du site {nomDuSite} l&rsquo;identité des dif&shy;fé&shy;rents inter&shy;venants dans le cadre de sa réa&shy;li&shy;sation et de son suivi :
          </p>
            <ul className='py-5 pl-5 pr-2.5 tablet:pl-8 tblet:pr-5 text-main-theme text-xl leading-8 tablet:text-2xl tablet:leading-10'>
              <li><span className='font-semibold'>Propriétaire :</span> {propriAdresse}</li>
              <li><span className='font-semibold'>Créateur :</span> {creator}</li>
              <li><span className='font-semibold'>Responsable publication :</span> {nom}  – {email}</li>
              <li className='font-semibold'>Le responsable publication est une personne physique ou une personne morale.</li>
              <li><span className='font-semibold'>Webmaster :</span> Votha Chheng – votha.chheng@gmail.com</li>
              <li><span className='font-semibold'>Hébergeur :</span> Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723 - privacy@vercel.com</li>
            </ul>
        </PageSection>
        <PageSection subtitle="Conditions générales d&rsquo;utilisation du site et des services proposés" delayBoolean={false} >
          <p className={pStyle}>
            L&rsquo;utilisation du site {nomDuSite} implique l&rsquo;acceptation pleine et entière des conditions générales d&rsquo;utili&shy;sation ci-après décrites. Ces conditions d&rsquo;utilisation sont suscep&shy;ti&shy;bles d&rsquo;être modifiées ou complétées à tout moment, les utili&shy;sateurs du site {nomDuSite} sont donc invités à les consulter de ma&shy;nière régu&shy;lière. Ce site est nor&shy;male&shy;ment ac&shy;ces&shy;sible à tout moment aux uti&shy;li&shy;sa&shy;teurs. Une in&shy;terrup&shy;tion pour raison de main&shy;te&shy;nance technique peut être toutefois décidée par {nom}, qui s&rsquo;efforcera alors de com&shy;muniquer préa&shy;la&shy;ble&shy;ment aux utilisateurs les dates et heures de l&rsquo;intervention. Le site {nomDuSite} est mis à jour régu&shy;lière&shy;ment par  {nom}. De la même façon, les mentions légales peuvent être mo&shy;difiées à tout moment : elles s&rsquo;imposent néan&shy;moins à l&rsquo;utilisateur qui est invité à s&rsquo;y référer le plus souvent possible afin d&rsquo;en prendre connaissance.
          </p>
        </PageSection>
        <PageSection subtitle="Description des services fournis" delayBoolean={false}>
          <p className={pStyle}>
            Le site {nomDuSite} a pour objet de fournir une information concernant l&rsquo;ensemble des activités de la société. {nom} s&rsquo;efforce de fournir sur le site {nomDuSite} des informations aussi précises que possible. Toutefois, il ne pourra être tenue respon&shy;sable des omis&shy;sions, des inexacti&shy;tudes et des ca&shy;rences dans la mise à jour, qu&rsquo;elles soient de son fait ou du fait des tiers par&shy;te&shy;naires qui lui four&shy;nis&shy;sent ces infor&shy;mations. Tous les informations indiquées sur le site {nomDuSite} sont données à titre indi&shy;catif, et sont suscep&shy;ti&shy;bles d&rsquo;évo&shy;luer. Par ailleurs, les ren&shy;sei&shy;gne&shy;ments figurant sur le site {nomDuSite} ne sont pas ex&shy;haus&shy;tifs. Ils sont don&shy;nés sous réserve de modi&shy;fi&shy;ca&shy;tions ayant été ap&shy;portées depuis leur mise en ligne.
          </p>

        </PageSection>
        <PageSection subtitle="Limitations contractuelles sur les données techniques" delayBoolean={false}>
          <p className={pStyle}>
            Le site utilise la technologie NextJS. Le site Internet ne pourra être tenu respon&shy;sa&shy;ble de dom&shy;mages maté&shy;riels liés à l&rsquo;utili&shy;sation du site. De plus, l&rsquo;uti&shy;lisa&shy;teur du site s&rsquo;engage à accéder au site en uti&shy;lisant un ma&shy;tériel récent, ne conte&shy;nant pas de virus et avec un navi&shy;ga&shy;teur de dernière géné&shy;ration mis à jour.
          </p>
        </PageSection>
        <PageSection subtitle="Propriété intellectuelle et contrefaçons" delayBoolean={false}>
          <p className={pStyle}>
            {nom} est propriétaire des droits de propriété intellectuelle ou détient les droits d&rsquo;usage sur tous les éléments ac&shy;ces&shy;si&shy;bles sur le site, notam&shy;ment les textes, images, gra&shy;phismes, logo, icônes, sons, logiciels. Toute reproduction, représen&shy;ta&shy;tion, mo&shy;di&shy;fication, pu&shy;blica&shy;tion, adap&shy;ta&shy;tion de tout ou par&shy;tie des élé&shy;ments du site, quel que soit le moyen ou le procédé utilisé, est inter&shy;dite, sauf auto&shy;risation écrite préalable de {nom}.
          </p>
          <p className={pStyle}>
            Toute exploita&shy;tion non autorisée du site ou de l&rsquo;un quel&shy;conque des éléments qu&rsquo;il contient sera consi&shy;dérée comme consti&shy;tu&shy;tive d&rsquo;une contre&shy;façon et pour&shy;suivie confor&shy;mé&shy;ment aux dispo&shy;si&shy;tions des articles L.335-2 et suivants du Code de Pro&shy;pri&shy;été Intel&shy;lectuell&shy;e.
          </p>

        </PageSection>
        <PageSection subtitle="Limitations de responsabilité" delayBoolean={false}>
          <p className={pStyle}>
            {nom} ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l&rsquo;uti&shy;li&shy;sa&shy;teur, lors de l&rsquo;ac&shy;cès au site {nomDuSite}, et ré&shy;sultant soit de l&rsquo;utilisation d&rsquo;un matériel ne ré&shy;pon&shy;dant pas aux spé&shy;cifi&shy;cations indi&shy;quées au point 4, soit de l&rsquo;ap&shy;parition d&rsquo;un bug ou d&rsquo;une incom&shy;patibilité. {nom} ne pour&shy;ra également être tenue respon&shy;sable des dom&shy;mages indirects (tels par exemple qu&rsquo;une perte de marché ou perte d&rsquo;une chance) consécutifs à l&rsquo;utilisation du site {nomDuSite}. Des espaces interactifs (possibilité de poser des questions dans l&rsquo;espace contact) sont à la dispo&shy;si&shy;tion des utili&shy;sateurs. {nom} se ré&shy;serve le droit de sup&shy;primer, sans mise en de&shy;meure préa&shy;lable, tout con&shy;tenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, {nom} se réserve également la pos&shy;si&shy;bi&shy;lité de mettre en cause la respon&shy;sabi&shy;lité civile et/ou pénale de l&rsquo;uti&shy;lisateur, notam&shy;ment en cas de mes&shy;sage à caractère raciste, injurieux, dif&shy;famant, ou porno&shy;gra&shy;phique, quel que soit le support utilisé (texte, photographie…).
          </p>
        </PageSection>
        <PageSection subtitle="Gestion des données personnelles" delayBoolean={false}>
          <p className={pStyle}>
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l&rsquo;article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995. A l&rsquo;occasion de l&rsquo;utilisation du site {nomDuSite}, peuvent êtres recueil&shy;lies : l&rsquo;URL des liens par l&rsquo;intermé&shy;diaire desquels l&rsquo;utili&shy;sateur a ac&shy;cédé au site {nomDuSite}, le fournisseur d&rsquo;accès de l&rsquo;utilisateur, l&rsquo;adresse de protocole Internet (IP) de l&rsquo;utilisa&shy;teur. En tout état de cause {nom} ne collecte des informations personnelles relatives à l&rsquo;utili&shy;sateur que pour le be&shy;soin de certains services pro&shy;po&shy;sés par le site {nomDuSite}. L&rsquo;utilisa&shy;teur fournit ces infor&shy;mations en toute connaissance de cause, notam&shy;ment lorsqu&rsquo;il procède par lui-même à leur saisie. Il est alors pré&shy;cisé à l&rsquo;uti&shy;li&shy;sa&shy;teur du site {nomDuSite} l&rsquo;obligation ou non de fournir ces in&shy;for&shy;ma&shy;tions.
          </p>
          <p className={pStyle}>
            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l&rsquo;informatique, aux fichiers et aux libertés, tout utilisateur dispose d&rsquo;un droit d&rsquo;accès, de rectification et d&rsquo;opposition aux données personnelles le concer&shy;nant, en ef&shy;fectuant sa demande écrite et signée, ac&shy;com&shy;pagnée d&rsquo;une copie du titre d&rsquo;identité avec signa&shy;ture du titulaire de la pièce, en précisant l&rsquo;adresse à laquelle la réponse doit être envoyée.
          </p>
          <p className={pStyle}>
            Aucune information personnelle de l&rsquo;utilisateur du site {nomDuSite} n&rsquo;est publiée à l&rsquo;insu de l&rsquo;utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l&rsquo;hypothèse du rachat de {nom} et de ses droits permet&shy;trait la transmission des dites informations à l&rsquo;éventuel acquéreur qui serait à son tour tenu de la même obli&shy;gation de conser&shy;vation et de modi&shy;fi&shy;ca&shy;tion des don&shy;nées vis à vis de l&rsquo;utili&shy;sateur du site {nomDuSite}. Les bases de données sont protégées par les disposi&shy;tions de la loi du 1er juillet 1998 trans&shy;posant la di&shy;rective 96/9 du 11 mars 1996 relative à la pro&shy;tection juri&shy;di&shy;que des bases de données.
          </p>
        </PageSection>
        <PageSection subtitle="Liens hypertextes et cookies" delayBoolean={false}>
          <p className={pStyle}>
            Le site {nomDuSite} contient un certain nombre de liens hypertextes vers d&rsquo;autres sites, mis en place avec l&rsquo;autorisation de {nom}. Cependant, {nom} n&rsquo;a pas la possibilité de vérifier le contenu des sites ainsi visités, et n&rsquo;assumera en conséquence aucune responsabilité de ce fait. La navi&shy;ga&shy;tion sur le site {nomDuSite} est susceptible de provoquer l&rsquo;installation de cookie(s) sur l&rsquo;ordinateur de l&rsquo;utilisateur. Un cookie est un fi&shy;chier de pe&shy;tite tail&shy;le, qui ne per&shy;met pas l&rsquo;identification de l&rsquo;utilisateur, mais qui enregistre des informations relatives à la navigation d&rsquo;un ordinateur sur un site. Les don&shy;nées ainsi obte&shy;nues visent à faci&shy;li&shy;ter la navi&shy;ga&shy;tion ulté&shy;rieure sur le site, et ont éga&shy;le&shy;ment vocation à permettre diver&shy;ses me&shy;su&shy;res de fré&shy;quen&shy;ta&shy;tion. Le refus d&rsquo;installation d&rsquo;un cookie peut entraîner l&rsquo;impos&shy;sibi&shy;lité d&rsquo;accéder à certains services. L&rsquo;utili&shy;sateur peut toute&shy;fois confi&shy;gurer son ordi&shy;na&shy;teur de la ma&shy;nière sui&shy;ante, pour re&shy;fu&shy;ser l&rsquo;instal&shy;lation des cookies.
          </p>
          <p className={pStyle}>
            Sous Firefox : en haut de la fenêtre du navi&shy;gateur, cliquez sur le bouton Firefox, puis aller dans l&rsquo;onglet Options. Cli&shy;quer sur l&rsquo;onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l&rsquo;historique. Enfin décochez-la pour désactiver les cookies.
          </p>
          <p className={pStyle}>
            Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur Paramètres de contenu. Dans la section « Cookies », vous pouvez bloquer les cookies.
          </p>
          <p className={pStyle}>
            Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur préférences. Dans l&rsquo;onglet « Confidentialité », vous pouvez bloquer les cookies.
          </p> 
        </PageSection>
        <PageSection subtitle="Droit applicable et attribution de juridiction" delayBoolean={false}>
          <p className={pStyle}>
            Tout litige en relation avec l&rsquo;utilisation du site {nomDuSite} est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
          </p>
        </PageSection>
        <PageSection subtitle="Les principales lois concernées" delayBoolean={false}>
          <p className={pStyle}>
            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l&rsquo;informatique, aux fichiers et aux libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&rsquo;économie numérique.
          </p>
        </PageSection>
        <PageSection subtitle="Lexique" delayBoolean={false}>
          <p className={pStyle}>
            <em>Utilisateur</em> : Internaute se connectant, utilisant le site susnommé.
          </p>
          <p className={pStyle}>
            <em>Informations personnelles</em> : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l&rsquo;identification des personnes physiques auxquelles elles s&rsquo;appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
          </p>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default MentionLegalesScreen