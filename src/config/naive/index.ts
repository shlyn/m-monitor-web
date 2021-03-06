import {
  // create naive ui
  create,
  // providers
  NConfigProvider,
  NMessageProvider,
  // themeOverrides
  GlobalThemeOverrides,
  // component
  NCountdown,
  NDataTable,
  NTable,
  NSteps,
  NStep,
  NRadioGroup,
  NPopover,
  NPopselect,
  NButton,
  NRadio,
  NCheckboxGroup,
  NCheckbox,
  NSelect,
  NDropdown,
  NModal,
  NSlider,
  NInput,
  NInputGroup,
  NForm,
  NFormItem,
  NFormItemRow,
  NFormItemCol,
  NEllipsis,
  NTooltip,
  NSkeleton,
  NCollapseTransition,
  NTabs,
  NTabPane,
  NSpin,
  NUpload,
  NUploadDragger,
  NSwitch,
  NDatePicker,
  NPopconfirm,
  NCarousel,
  NRow,
  NCol,
  NStatistic,
  NDescriptions,
  NDescriptionsItem,
  NResult
} from 'naive-ui'
import themeOverridesConfig from './themeOverridesConfig'

export default create({
  components: [
    NResult,
    NDescriptionsItem,
    NDescriptions,
    NStatistic,
    NCol,
    NRow,
    NCountdown,
    NDataTable,
    NTable,
    NSteps,
    NStep,
    NConfigProvider,
    NMessageProvider,
    NRadioGroup,
    NPopover,
    NPopselect,
    NButton,
    NRadio,
    NCheckboxGroup,
    NCheckbox,
    NSelect,
    NDropdown,
    NModal,
    NSlider,
    NInput,
    NInputGroup,
    NForm,
    NFormItem,
    NFormItemRow,
    NFormItemCol,
    NEllipsis,
    NTooltip,
    NSkeleton,
    NCollapseTransition,
    NTabs,
    NTabPane,
    NSpin,
    NUpload,
    NUploadDragger,
    NSwitch,
    NDatePicker,
    NPopconfirm,
    NCarousel
  ]
})

export const themeOverrides: GlobalThemeOverrides = themeOverridesConfig
