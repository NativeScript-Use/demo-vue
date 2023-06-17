<script lang="ts" setup>
import BottomSheet from "@/components/rootLayout/BottomSheet.vue";
import Modal from '@/components/rootLayout/Modal.vue';
import SideBar from '@/components/rootLayout/SideBar.vue';
import SnackBar from '@/components/rootLayout/SnackBar.vue';
import CustomPage from "@/components/CustomPage.vue";
import { useRootLayout } from '@nativescript-use/vue'

const { show: showBottomSheet } = useRootLayout(BottomSheet, {
  rootLayoutOption: {
    shadeCover: {
      color: '#282C34',
      opacity: 0.7,
      tapToClose: true,
    },
    animation: {
      enterFrom: {
        translateY: 500,
        duration: 300,
      },
      exitTo: {
        translateY: 500,
        duration: 300,
      },
    },
  },
  onClose: () => {
    console.log("onClose BottomSheet")
  }
});

const { show: showModal } = useRootLayout(Modal, {
  rootLayoutOption: {
    shadeCover: {
      color: '#282C34',
      opacity: 0.7,
      tapToClose: true,
    },
    animation: {
      enterFrom: {
        translateY: -200,
        duration: 300,
      },
      exitTo: {
        translateY: -200,
        opacity: 0,
        duration: 300,
      },
    },
  },
  onClose: () => {
    console.log("onClose Modal")
  }
});

const { show: showSideBar } = useRootLayout(SideBar, {
  rootLayoutOption: {
    shadeCover: {
      color: '#282C34',
      opacity: 0.7,
      tapToClose: true,
    },
    animation: {
      enterFrom: {
        translateX: -300,
        duration: 300,
      },
      exitTo: {
        translateX: -300,
        duration: 300,
      },
    },
  },
  onClose: () => {
    console.log("onClose SideBar")
  }
});
const { show: showSnackbar } = useRootLayout(SnackBar, {
  rootLayoutOption: {
    shadeCover: {
      color: '#282C34',
      opacity: 0.7,
      tapToClose: true,
    },
    animation: {
      enterFrom: {
        translateY: -300,
        duration: 300,
      },
      exitTo: {
        translateY: -300,
        duration: 300,
      },
    },
  },
  onClose: () => {
    console.log("onClose SnackBar")
  }
});
</script>

<template>
  <CustomPage>
    <RootLayout>
      <StackLayout class="p-3">
        <Label class="text-center text-2xl">RootLayout example</Label>
        <Button @tap="showBottomSheet" class="mx-1 mt-8" text="Open BottomSheet"></Button>
        <Button @tap="showModal" class="mx-1 mt-8" text="Open Modal"></Button>
        <Button @tap="showSideBar" class="mx-1 mt-8" text="Open Sidebar"></Button>
        <Button @tap="showSnackbar" class="mx-1 mt-8" text="Open Snackbar"></Button>
      </StackLayout>
    </RootLayout>
  </CustomPage>
</template>
