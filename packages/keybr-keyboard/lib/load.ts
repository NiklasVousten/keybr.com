import { Geometry, Layout } from "@keybr/layout";
import {
  MATRIX,
  STANDARD_101,
  STANDARD_101_FULL,
  STANDARD_102,
  STANDARD_102_FULL,
} from "./data/geometry.ts";
import {
  LAYOUT_BE_BY_WIN,
  LAYOUT_CS_CZ_WIN,
  LAYOUT_DE_BONE,
  LAYOUT_DE_CH_WIN,
  LAYOUT_DE_DE_WIN,
  LAYOUT_DE_MINE,
  LAYOUT_DE_NEO_2,
  LAYOUT_EL_GR_WIN,
  LAYOUT_EN_UK_WIN,
  LAYOUT_EN_US_CANARY_MATRIX,
  LAYOUT_EN_US_COLEMAK,
  LAYOUT_EN_US_COLEMAK_DH,
  LAYOUT_EN_US_COLEMAK_DH_MATRIX,
  LAYOUT_EN_US_DVORAK_WIN,
  LAYOUT_EN_US_WIN,
  LAYOUT_EN_US_WORKMAN,
  LAYOUT_ES_ES_WIN,
  LAYOUT_FR_BEPO,
  LAYOUT_FR_CA_WIN,
  LAYOUT_FR_CH_WIN,
  LAYOUT_FR_ERGOL,
  LAYOUT_FR_FR_WIN,
  LAYOUT_FR_OPTIMOT_ERGO,
  LAYOUT_IT_IT_WIN,
  LAYOUT_PL_PL_WIN,
  LAYOUT_PT_BR_WIN,
  LAYOUT_PT_PT_WIN,
  LAYOUT_RU_RU_WIN,
  LAYOUT_SL_SI_WIN,
  LAYOUT_SV_SE_WIN,
  LAYOUT_UK_UA_WIN,
} from "./data/layout.ts";
import { Keyboard } from "./keyboard.ts";
import { type CodePointDict, type GeometryDict } from "./types.ts";

const layoutDict = new Map<Layout, CodePointDict>([
  [Layout.BE_BY, LAYOUT_BE_BY_WIN],
  [Layout.CS_CZ, LAYOUT_CS_CZ_WIN],
  [Layout.DE_CH, LAYOUT_DE_CH_WIN],
  [Layout.DE_DE, LAYOUT_DE_DE_WIN],
  [Layout.DE_BONE, LAYOUT_DE_BONE],
  [Layout.DE_NEO_2, LAYOUT_DE_NEO_2],
  [Layout.DE_MINE, LAYOUT_DE_MINE],
  [Layout.EN_UK, LAYOUT_EN_UK_WIN],
  [Layout.EN_US, LAYOUT_EN_US_WIN],
  [Layout.EN_US_COLEMAK, LAYOUT_EN_US_COLEMAK],
  [Layout.EN_US_COLEMAK_DH, LAYOUT_EN_US_COLEMAK_DH],
  [Layout.EN_US_COLEMAK_DH_MATRIX, LAYOUT_EN_US_COLEMAK_DH_MATRIX],
  [Layout.EN_US_CANARY_MATRIX, LAYOUT_EN_US_CANARY_MATRIX],
  [Layout.EN_US_DVORAK, LAYOUT_EN_US_DVORAK_WIN],
  [Layout.EN_US_WORKMAN, LAYOUT_EN_US_WORKMAN],
  [Layout.EL_GR, LAYOUT_EL_GR_WIN],
  [Layout.ES_ES, LAYOUT_ES_ES_WIN],
  [Layout.FR_BEPO, LAYOUT_FR_BEPO],
  [Layout.FR_ERGO_L, LAYOUT_FR_ERGOL],
  [Layout.FR_CA, LAYOUT_FR_CA_WIN],
  [Layout.FR_CH, LAYOUT_FR_CH_WIN],
  [Layout.FR_FR, LAYOUT_FR_FR_WIN],
  [Layout.FR_OPTIMOT_ERGO, LAYOUT_FR_OPTIMOT_ERGO],
  [Layout.IT_IT, LAYOUT_IT_IT_WIN],
  [Layout.PL_PL, LAYOUT_PL_PL_WIN],
  [Layout.PT_BR, LAYOUT_PT_BR_WIN],
  [Layout.PT_PT, LAYOUT_PT_PT_WIN],
  [Layout.RU_RU, LAYOUT_RU_RU_WIN],
  [Layout.SL_SI, LAYOUT_SL_SI_WIN],
  [Layout.SV_SE, LAYOUT_SV_SE_WIN],
  [Layout.UK_UA, LAYOUT_UK_UA_WIN],
]);

const geometryDict = new Map<Geometry, GeometryDict>([
  [Geometry.STANDARD_101, STANDARD_101],
  [Geometry.STANDARD_101_FULL, STANDARD_101_FULL],
  [Geometry.STANDARD_102, STANDARD_102],
  [Geometry.STANDARD_102_FULL, STANDARD_102_FULL],
  [Geometry.MATRIX, MATRIX],
]);

export function loadKeyboard(
  layout: Layout,
  geometry: Geometry = Geometry.STANDARD_101,
): Keyboard {
  return new Keyboard(
    layout,
    layoutDict.get(layout)!,
    geometryDict.get(geometry)!,
  );
}
