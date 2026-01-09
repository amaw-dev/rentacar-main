<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
        <p class="text-gray-600">Última actualización: Enero 2025</p>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none text-gray-700">
        <p>
          El presente Política de Privacidad establece los términos en que <strong>AMAW S.A.S</strong> usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.
        </p>
        <p>
          Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Información que es recogida</h2>
        <p>
          Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Uso de la información recogida</h2>
        <p>
          Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.
        </p>
        <p>
          Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
        </p>
        <p>
          <strong>AMAW S.A.S</strong> está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Cookies</h2>
        <p>
          Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente.
        </p>
        <p>
          Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web. Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente.
        </p>
        <p>
          Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente.
        </p>
        <p>
          Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Enlaces a Terceros</h2>
        <p>
          Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted dé clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.
        </p>
        <p>
          Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Control de su información personal</h2>
        <p>
          En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.
        </p>
        <p>
          En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
        </p>
        <p>
          <strong>AMAW S.A.S</strong> se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
        </p>

        <!-- Company Info -->
        <div class="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p class="font-semibold text-gray-900">AMAW S.A.S</p>
          <p>NIT: 900.665.917-7</p>
          <p>Carrera 12a No. 3-81, Ap 103, T8 Mz 3, Jamundí</p>
          <p>+57 301 672 9250</p>
          <p>info@amawsas.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { franchise } = useAppConfig()

useHead({
  title: 'Política de Privacidad | Alquilatucarro',
  link: [
    { rel: 'canonical', href: `${franchise.website}/politica-privacidad` }
  ]
})

useSeoMeta({
  description: 'Política de privacidad de Alquilatucarro. Conoce cómo protegemos y utilizamos tu información personal en nuestro servicio de alquiler de carros en Colombia.',
  ogTitle: 'Política de Privacidad | Alquilatucarro',
  ogDescription: 'Política de privacidad de Alquilatucarro. Conoce cómo protegemos tu información personal.',
})
</script>
