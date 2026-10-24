# Video understanding
**Type:** Construct  
**Referenced in:** 54 papers  
**Also known as:** Video comprehension, Video understanding and reasoning, Long-form video understanding, Long-form video-language understanding, Explanation  

## State of the Field

**Definition agreement:** Complementary. Most papers define video understanding as a model's ability to comprehend, interpret, and often reason about video content, events, and temporal or spatial relations. A few papers narrow this to long-duration videos or frame it as tasks like question answering, description, or inferring the underlying logic of events, so they describe compatible scopes and manifestations of the same phenomenon rather than a single identical definition.

**Space of definitions.** Across papers, the prevailing usage treats video understanding as a model ability to comprehend and interpret video content, usually including content, context, events, actions, and temporal dynamics. Many definitions also fold in reasoning, describing comprehension of dynamic visual sequences through spatial, temporal, and semantic information, or the ability to draw conclusions from what unfolds over time. A smaller line of work uses the term more behaviorally, defining it through answering questions, generating descriptions or responses, or otherwise demonstrating comprehension of a video's temporal and spatial content.

**Space of facets.** Papers also use the label video comprehension for the same general capability, and some use broader compound labels such as video understanding and reasoning. The clearest subtype is long-form video understanding, sometimes phrased as long-form video-language understanding, where the focus shifts to extended-duration videos and integrating information over many minutes or, in one definition, hour-long material. One paper also carves out explanation as a facet, meaning explaining phenomena in videos by articulating their underlying logic, purpose, or mechanism.

**Space of measurement.** Operationally, papers link video understanding to 19 measurement instruments and 2 behavioral indicators. The linked measures are benchmarks rather than human evaluation or probe-style analyses, and the most frequently linked are Video-MME, MVBench, MLVU, ActivityNet-QA, and EgoSchema. These benchmarks cover comprehensive video analysis, tasks that cannot be resolved by single-frame reliance, multi-task and long-form question answering, and open-ended or multi-choice evaluation, and some open-ended benchmarks are scored with GPT-3.5. This mostly matches definitions centered on interpreting content and temporal dynamics, while also reflecting task-oriented definitions that frame the construct through answering questions or generating descriptions.

**Links.** Beyond measurement, papers claim causal relationships from temporal reasoning and reasoning to video understanding. One paper claims a causal relationship from temporal reasoning to video understanding, stating that enhanced textual temporal reasoning transfers to holistic video understanding, and another claims a causal relationship from reasoning to video understanding through leveraging reasoning processes to enhance it. Papers also treat video detailed captioning and video question answering as related to video understanding: one says detailed captioning benefits video understanding and generation, and another says typical video-language tasks, including video understanding, can be formulated as video question answering tasks. No correlations are reported.

## Sources

**[Vript: A Video Is Worth Thousands of Words](https://proceedings.neurips.cc/paper_files/paper/2024/file/6903a5aaece71b76623245fc6e32f01b-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The ability of a model to comprehend and interpret the content, context, and events within a video.

**[Temporal Reasoning Transfer from Text to Video](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7eecb72574b043ad0c69ea296212450-Paper-Conference.pdf) (as "Video comprehension")**
> The general capability of a model to understand and interpret the content of a video.

**[Seeing is Believing, but How Much? A Comprehensive Analysis of Verbalized Calibration in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.74.pdf) (as "Video understanding and reasoning")**
> Interpreting and drawing conclusions from dynamic visual sequences, such as videos, involving perception, comprehension, and adaptation.

**[Streaming Video Question-Answering with In-context Video KV-Cache Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/67a9b444cbcd647572c88194619f72d5-Paper-Conference.pdf) (as "Long-form video understanding")**
> A specific facet of video understanding focused on comprehending videos of extended duration, often requiring the integration of information over many minutes.

**[HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Long-form video-language understanding")**
> The comprehensive ability to process, comprehend, and reason about visual and linguistic information presented in videos spanning long durations, typically an hour or more.

**[MMWorld: Towards Multi-discipline Multi-faceted World Model Evaluation in Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/4364fef031fdf7bfd9d1c9c56b287084-Paper-Conference.pdf) (as "Explanation")**
> The ability to infer and articulate the underlying logic, purpose, or mechanism behind what is happening in a video.

## Relationships

### Video understanding →
- **MVBench** (measurements) — *measured_by*
  > MVBench [36] is designed to challenge LVLMs with video tasks that cannot be effectively resolved by single-frame reliance, featuring 4,000 QA pairs derived from 11 public video benchmarks. (Section 5.1)
  - [ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Video-MME** (measurements) — *measured_by*
  > For video understanding, we focused on three general benchmarks: MVBench (Li et al., 2024c), TempCompass (Liu et al., 2024c), and VideoMME (Fu et al., 2024)... (Section 4.2)
  - [Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf)
- **ActivityNet-QA** (measurements) — *measured_by*
  > By scaling up the LLM to 34B, our model demonstrates a marked improvement in video understanding capabilities, achieving state-of-the-art performance on video evaluation benchmarks with accuracies of 77.4% on MSVD [68], 62.1% on MSR-VTT [70], and 55.8% on ActivityNet [69]. (Section 4.3)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **EgoSchema** (measurements) — *measured_by*
  > “and (b) multi-choice video question answering benchmarks: NExT-QA (Xiao et al., 2021), IntentQA (Li et al., 2023b), and EgoSchema (Mangalam et al., 2024).”
  - [Matryoshka Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/722fcbc1a6667f2075d75ea79a1b3552-Paper-Conference.pdf)
- **MSVD-QA** (measurements) — *measured_by*
  > By scaling up the LLM to 34B, our model demonstrates a marked improvement in video understanding capabilities, achieving state-of-the-art performance on video evaluation benchmarks with accuracies of 77.4% on MSVD [68], 62.1% on MSR-VTT [70], and 55.8% on ActivityNet [69]. (Section 4.3)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **LongVideoBench** (measurements) — *measured_by*
  > We also evaluate the performance of mPLUG-Owl3 on video and multi-image benchmarks (including NextQA (Xiao et al., 2021), MVBench (Li et al., 2023c) VideoMME (Fu et al., 2024a), LongVideoBench (Wu et al., 2024) and MLVU (Zhou et al., 2024)), as it is capable of processing multiple images with an interleaved format.
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **MSRVTT-QA** (measurements) — *measured_by*
  > By scaling up the LLM to 34B, our model demonstrates a marked improvement in video understanding capabilities, achieving state-of-the-art performance on video evaluation benchmarks with accuracies of 77.4% on MSVD [68], 62.1% on MSR-VTT [70], and 55.8% on ActivityNet [69]. (Section 4.3)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **NExT-QA** (measurements) — *measured_by*
  > We also evaluate the performance of mPLUG-Owl3 on video and multi-image benchmarks (including NextQA (Xiao et al., 2021), MVBench (Li et al., 2023c) VideoMME (Fu et al., 2024a), LongVideoBench (Wu et al., 2024) and MLVU (Zhou et al., 2024)), as it is capable of processing multiple images with an interleaved format.
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **MLVU** (measurements) — *measured_by*
  > We also evaluate the performance of mPLUG-Owl3 on video and multi-image benchmarks (including NextQA (Xiao et al., 2021), MVBench (Li et al., 2023c) VideoMME (Fu et al., 2024a), LongVideoBench (Wu et al., 2024) and MLVU (Zhou et al., 2024)), as it is capable of processing multiple images with an interleaved format.
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **TempCompass** (measurements) — *measured_by*
  > we conduct comprehensive evaluations of the model across three multi-modal video benchmarks. VideoBench [52]... MVBench [36]... TempCompass [44]
  - [ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Perception Test** (measurements) — *measured_by*
  > We evaluate our model on a comprehensive suite of video understanding benchmarks... as well as the multiple-choice benchmarks NExT-QA (Xiao et al., 2021), VLEP (Lei et al., 2020), TVQA (Lei et al., 2018), and Perception Test (P˘atr˘aucean et al., 2023).
  - [Unifying Specialized Visual Encoders for Video Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chung25a/chung25a.pdf)
- **MSVD** (measurements) — *measured_by*
  > “To assess DART’s capabilities in video understanding, we integrate it with Video-LLaVA ... achieving a notable 4.0 score on MSVD”
  - [Stop Looking for ``Important Tokens'' in Multimodal Language Models: Duplication Matters More](https://aclanthology.org/2025.emnlp-main.505.pdf)
- **TGIF** (measurements) — *measured_by*
  > “To assess DART’s capabilities in video understanding, we integrate it with Video-LLaVA ... achieving ... 46.3% accuracy on TGIF”
  - [Stop Looking for ``Important Tokens'' in Multimodal Language Models: Duplication Matters More](https://aclanthology.org/2025.emnlp-main.505.pdf)
- **MMBench-Video** (measurements) — *measured_by*
  > To address these problems, we develop a new VideoQA benchmark, MMBench-Video, to evaluate the effectiveness of LVLMs in video understanding. (Section 1)
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **YouCook2** (measurements) — *measured_by*
  > We evaluate our EMLoC on six challenging benchmarks: ... and YouCook2 for video understanding. (Section 4.1).
  - [Efficient Multi-modal Long Context Learning for Training-free Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ma25v/ma25v.pdf)
- **TGIF-QA** (measurements) — *measured_by*
  > We evaluate our model on a comprehensive suite of video understanding benchmarks, including the open-ended MSVD-QA (Xu et al., 2017), MSRVTT-QA (Xu et al., 2017), TGIF (Jang et al., 2017), and ActivityNet-QA (Yu et al., 2019)...
  - [Unifying Specialized Visual Encoders for Video Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chung25a/chung25a.pdf)
- **TVQA** (measurements) — *measured_by*
  > We evaluate our model on a comprehensive suite of video understanding benchmarks... as well as the multiple-choice benchmarks NExT-QA (Xiao et al., 2021), VLEP (Lei et al., 2020), TVQA (Lei et al., 2018), and Perception Test (P˘atr˘aucean et al., 2023).
  - [Unifying Specialized Visual Encoders for Video Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chung25a/chung25a.pdf)
- **Event-Bench** (measurements) — *measured_by*
  > Table 3: Performance comparisons on 9 video benchmarks, including ActivityNet-QA (Yu et al., 2019), EgoSchema (Mangalam et al., 2023), EventBench (Du et al., 2024), LongVideoBench (Wu et al., 2024), PerceptionTest (Patraucean et al., 2023), MVBench (Li et al., 2024b), NExT-QA (Xiao et al., 2021), VNBench (Zhao et al., 2024), and VideoMME (Fu et al., 2024a). (Table 3)
  - [LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)
- **VNBench** (measurements) — *measured_by*
  > Table 3: Performance comparisons on 9 video benchmarks, including ActivityNet-QA (Yu et al., 2019), EgoSchema (Mangalam et al., 2023), EventBench (Du et al., 2024), LongVideoBench (Wu et al., 2024), PerceptionTest (Patraucean et al., 2023), MVBench (Li et al., 2024b), NExT-QA (Xiao et al., 2021), VNBench (Zhao et al., 2024), and VideoMME (Fu et al., 2024a). (Table 3)
  - [LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf)

### → Video understanding
- **Temporal reasoning** (constructs) — *causes*
  > These results validate that enhanced textual temporal reasoning in LLM backbones effectively transfers to holistic video understanding. (Section 4.2)
  - [Temporal Reasoning Transfer from Text to Video](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7eecb72574b043ad0c69ea296212450-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > The results above demonstrate the effectiveness of our approach, particularly in leveraging reasoning processes to enhance video understanding.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)

### Associated with
- **Video detailed captioning** (behaviors tasks)
  > Video detailed captioning is a key task which aims to generate comprehensive and coherent textual descriptions of video content, benefiting both video understanding and generation. (Abstract)
  - [AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aebc17b683792a17dd4a24fcb038ba6-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks)
  > In the research context of Video-LLMs, typical video-language tasks such as video understanding, summarization, and reasoning can be formulated as video question answering tasks. (Section 3)
  - [Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf)
