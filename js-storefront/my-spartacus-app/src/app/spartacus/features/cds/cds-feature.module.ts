import { NgModule } from '@angular/core';
import { CdsConfig, CdsModule } from '@spartacus/cds';
import { cdsTranslationChunksConfig, cdsTranslationsEn } from '@spartacus/cds/assets';
import { I18nConfig, provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [CdsModule.forRoot()],
  providers: [
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: cdsTranslationsEn },
        chunks: cdsTranslationChunksConfig,
      },
    }),
    provideConfig(<CdsConfig>{
      cds: {
        tenant: 'htpissforps',
        baseUrl: 'https://htpissforps-testsite.api.us.context.cloud.sap/',
        endpoints: {
          strategyProducts: '/strategy/${tenant}/strategies/${strategyId}/products',
          searchIntelligence: '/search-intelligence/v1/sites/${cdsSiteId}/trendingSearches',
        },
        merchandising: {
          defaultCarouselViewportThreshold: 80,
        },
      },
    }),
    provideConfig(<CdsConfig>{
      cds: {
        profileTag: {
          javascriptUrl:
            'https://tag.static.us.context.cloud.sap/js/profile-tag.min.js',
          configUrl: 'https://tag.static.us.context.cloud.sap/config/htpissforps-main-default',
          allowInsecureCookies: true,
          sciEnabled: false,
        },
      },
    }),
  ],
})
export class CdsFeatureModule {}
