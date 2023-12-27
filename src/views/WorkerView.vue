<script lang="ts" setup>
import { isBoolean } from "@antfu/utils";
import { useWorker } from "@nativescript-use/vue";
import { ScrollView, isIOS } from "@nativescript/core";
import { ref, watch } from "nativescript-vue";
import CustomPage from "~/components/CustomPage.vue";
import { utils } from "~/importExample";


/**
 * Task with runOnChangeState.
 */
const myReactiveData = ref({ title: "Reactive data in background", value: 1000 });

const { runTask: runInfiniteTask, isRunning, result } = useWorker((ctx) => {
  return ctx.state.value + Math.floor(Math.random() * (10000 - 1 + 1) + 1);
}, { state: myReactiveData, runOnChangeState: true })

watch(result, () => {
  //On change result
  console.log("New result from background " + result.value);
  setTimeout(() => {
    myReactiveData.value = { title: "New Reactive data in background", value: 2000 }
  }, 500);
})

/**
 * Task fibonacci.
 */
const fibonacciNumber = isIOS ? 39 : 43;

function fibonacci(num: number): number {
  if (num <= 1) return 1
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const runFibonacciWithoutWorker = () => fibonacci(fibonacciNumber);

const {
  runTask: runFibonacciTask,
  isRunning: isRunningFibonacci,
  result: resultFibonacci
} = useWorker((ctx) => {
  return fibonacci(ctx.state);
}, { state: fibonacciNumber, attachToContextFunctions: { fibonacci } })

/**
 * Task SimpleTask.
 */
const {
  runTask: runSimpleTask,
  isRunning: isRunningSimpleTask,
  result: resultSimpleTask
} = useWorker((ctx) => {
  utils.log();
  console.log("isBoolean from @antfu/utils: " + isBoolean(ctx.state));
  return ctx.state.value + Math.floor(Math.random() * (10000 - 1 + 1) + 1);
}, {
  state: myReactiveData, on: {
    error(e) {
      console.log(e);

    }
  },
  performance: true
})

/**
 * Task onProgressUpdate.
 */
const {
  runTask: runTaskOnProgressUpdate,
  update,
  isRunning: isRunningProgress
} = useWorker<any, any, { title: string, value: string }>((ctx) => {
  function sleep(t: number) {
    const start = Date.now();
    while (Date.now() - start < t);
  }
  // Action in background
  ctx.onProgressUpdate({ title: "Loading image", value: "10%" });
  sleep(800);
  // Continue action in background
  ctx.onProgressUpdate({ title: "Transforming image", value: "50%" });
  sleep(800);
  // Continue action in background
  ctx.onProgressUpdate({ title: "Saving image", value: "90%" });
  sleep(800);
  // Finish action in background
  ctx.onProgressUpdate({ title: "Finish", value: "100%" });
  return { finish: true };
}, { state: { file: "file.png" } });

watch(update, () => {
  console.log("watch update");
  console.log(update.value);
})

</script>

<template>
  <CustomPage>
    <StackLayout class="p-3">
      <ScrollView>
        <StackLayout class="p-3">
          <Label class="text-center text-2xl">useWorker example</Label>

          <StackLayout class="example h-[50] w-[50] bg-blue-300 rounded-full mt-8"></StackLayout>
          <FlexboxLayout class=" justify-center items-center flex-col mt-6 bg-variant rounded-2xl p-4">
            <Label class="text-center text-lg w-full">Result Infinite {{ result }}</Label>
            <Label class="text-center text-lg mt-2">isRunning {{ isRunning }}</Label>
          </FlexboxLayout>
          <Button @tap="runInfiniteTask()" class="mx-1 mt-4 w-1/2" text="Run Task"></Button>
          <FlexboxLayout class=" justify-center items-center flex-col mt-10 bg-variant rounded-2xl p-4">
            <Label class="text-center text-lg w-full">Result Fibonacci {{ resultFibonacci }}</Label>
            <Label class="text-center text-lg mt-2">isRunning {{ isRunningFibonacci }}</Label>
          </FlexboxLayout>
          <FlexboxLayout class="mt-4 justify-center">
            <Button @tap="runFibonacciTask()" class="px-2 ios:py-2 android:text-sm " text="Run Fibonacci"></Button>
            <Button @tap="runFibonacciWithoutWorker()" class="px-2 ios:py-2 android:text-sm ml-2"
              text="Fibonacci without Worker"></Button>
          </FlexboxLayout>


          <FlexboxLayout class=" justify-center items-center flex-col mt-10 bg-variant rounded-2xl p-4">
            <Label class="text-center text-lg w-full">Result Simple {{ resultSimpleTask }}</Label>
            <Label class="text-center text-lg mt-2">isRunning {{ isRunningSimpleTask }}</Label>
          </FlexboxLayout>
          <Button @tap="runSimpleTask()" class="mx-1 mt-4 w-1/2" text="Run Simple"></Button>

          <FlexboxLayout class=" justify-center items-center flex-col mt-10 bg-variant rounded-2xl p-4">
            <Label class="text-center text-lg w-full">OnProgressUpdate </Label>
            <Label class="text-center text-lg w-full mt-2">{{ update?.data.title }} - {{ update?.data.value }}</Label>
            <Label class="text-center text-lg mt-2">isRunning {{ isRunningProgress }}</Label>
          </FlexboxLayout>
          <Button @tap="runTaskOnProgressUpdate()" class="mx-1 mt-4 w-1/2" text="Run OnProgressUpdate"></Button>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </CustomPage>
</template>
<style>
@keyframes example {
  0% {
    transform: translate(-100, 0);
  }

  50% {
    transform: translate(100, 0);
  }

  100% {
    transform: translate(-100, 0);
  }
}

.example {
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>