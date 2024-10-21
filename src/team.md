---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://foruda.gitee.com/avatar/1676923220283662461/628270_osc_hrd_1578929666.jpg!avatar200',
    name: '阿达',
    title: 'Creator'
  },
  {
    avatar: 'https://foruda.gitee.com/avatar/1676923220283662461/628270_osc_hrd_1578929666.jpg!avatar200',
    name: '阿德',
    title: 'Developer'
  },
  {
    avatar: 'https://foruda.gitee.com/avatar/1676923220283662461/628270_osc_hrd_1578929666.jpg!avatar200',
    name: '阿东',
    title: 'Developer'
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      研发团队由热爱技术的年轻人组成，他们热衷于分享和探索，擅长将重复性的工作流程自动化，提升效率。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium"
    :members="members"
  />
</VPTeamPage>
