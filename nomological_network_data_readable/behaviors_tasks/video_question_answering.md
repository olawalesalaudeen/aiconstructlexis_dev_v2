# Video question answering
**Type:** Behavior  
**Referenced in:** 66 papers  
**Also known as:** Long-video question answering, Egocentric question answering, Temporal video reasoning  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is answering a natural language question from the content of a video, with emphasis on dynamic visual content and, in many definitions, temporal information. Most papers treat success as providing a correct textual or natural-language answer. Some formulations instead use multiple-choice or closed-ended selection, while others emphasize open-ended or long-form answer generation. A smaller line of work narrows the task to first-person video or to questions that require understanding complex visual and temporal relationships, including relations between actions over time such as sequence or frequency.

**Variants.** Several variants recur. Long-video question answering is common, and papers describe it both as multiple-choice-based selection and as open-ended text generation for long-form videos. Other variants include egocentric question answering on first-person video, sometimes for episodic memory-related questions, and temporal video reasoning, where answers depend on across-time relations between actions. Some authors also place video QA in instruction-following or multi-turn settings.

**Space of elicitation and scores.** Papers measure it with 15 instruments. The most frequently linked are ActivityNet-QA, MSVD-QA, NExT-QA, MSRVTT-QA, and TGIF-QA, with 10 other instruments used less often. These are mostly benchmark datasets for video QA, including open-ended, closed-ended, zero-shot, and long-form evaluations, and one paper also uses a judge-based setup in which generated answers are scored by GPT-4 as True or False.

**What it is taken as evidence of.** Papers link it to 8 constructs. The most frequently linked are causal reasoning, multimodal understanding, reasoning, temporal reasoning, and instruction following ability, with 3 other constructs appearing less often. Direct measurement claims are narrower: one paper uses image and video question answering to benchmark multimodal understanding, and another says long-video question answering benchmarks aim to measure causal and temporal reasoning abilities over long temporal windows. Other papers instead claim causal relationships from video question answering to reasoning, or from reasoning and multimodal understanding to video question answering, so papers do not treat it as evidence of only one construct.

## Sources

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)**
> Answering questions that require understanding of dynamic visual content from videos.

**[Understanding Long Videos with Multimodal Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f591824a3bd840f74947fcda304c945-Paper-Conference.pdf) (as "Long-video question answering")**
> Answering questions about long videos, typically by selecting among candidate answers or generating a textual response.

**[MMEgo: Towards Building Egocentric Multimodal LLMs for Video QA](https://proceedings.iclr.cc/paper_files/paper/2025/file/b29a95e7d9f1e1a6dfc567b556733744-Paper-Conference.pdf) (as "Egocentric question answering")**
> Answering questions about first-person videos using visual and textual evidence from the video content.

**[SlowFocus: Enhancing Fine-grained Temporal Understanding in Video LLM](https://proceedings.neurips.cc/paper_files/paper/2024/file/94ef721705ea95d6981632be62bb66e2-Paper-Conference.pdf) (as "Temporal video reasoning")**
> A category of tasks requiring the model to answer questions that involve understanding the relationships between actions over time, such as their sequence or frequency.

## Relationships

### Video question answering →
- **NExT-QA** (measurements) — *measured_by*
  > We evaluate Emu on a broad range of vision-language tasks including ... video question answering (MSRVTTQA (Xu et al., 2017), MSVDQA (Xu et al., 2017), NextQA (Xiao et al., 2021))... (Section 5)
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **ActivityNet-QA** (measurements) — *measured_by*
  > Additionally, we evaluate zero-shot performance on open-ended video question-answering benchmarks such as MSVD-QA [68], ActivityNet-QA [69], MSRVTT-QA [70]... (Section 4.1)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **MSVD-QA** (measurements) — *measured_by*
  > We evaluate Emu on a broad range of vision-language tasks including ... video question answering (MSRVTTQA (Xu et al., 2017), MSVDQA (Xu et al., 2017), NextQA (Xiao et al., 2021))... (Section 5)
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **MSRVTT-QA** (measurements) — *measured_by*
  > We evaluate Emu on a broad range of vision-language tasks including ... video question answering (MSRVTTQA (Xu et al., 2017), MSVDQA (Xu et al., 2017), NextQA (Xiao et al., 2021))... (Section 5)
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **TGIF-QA** (measurements) — *measured_by*
  > ...as well as four video QA benchmarks: MVSD-QA (Xu et al., 2017), MSRVTT-QA (Xu et al., 2016), TGIF-QA (Jang et al., 2017), and ActivityNet-QA (Caba Heilbron et al., 2015). (Section 4.2)
  - [Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf)
- **Video-MME** (measurements) — *measured_by*
  > To evaluate FRAME-VOYAGER, we plug it into two versions of the state-of-the-art Video-LLM named VILA (VILA-8B and VILA-40B, Lin et al. (2024b)) and conduct experiments on four widely-used Video Question Answering benchmarks, Video-MME (Fu et al., 2024a), MLVU (Zhou et al., 2024), NextQA (Xiao et al., 2021) and ActivityNet-QA (Yu et al., 2019). (Section 1)
  - [Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf)
- **EgoSchema** (measurements) — *measured_by*
  > We use Egoschema (Mangalam et al., 2023) and VideoMME (Fu et al., 2024) to evaluate the long video capabilities of VideoChat-T.
  - [TimeSuite: Improving MLLMs for Long Video Understanding via Grounded Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e8309c9ca683e11672e3dbcd4b87776-Paper-Conference.pdf)
- **MLVU** (measurements) — *measured_by*
  > To evaluate FRAME-VOYAGER, we plug it into two versions of the state-of-the-art Video-LLM named VILA (VILA-8B and VILA-40B, Lin et al. (2024b)) and conduct experiments on four widely-used Video Question Answering benchmarks, Video-MME (Fu et al., 2024a), MLVU (Zhou et al., 2024), NextQA (Xiao et al., 2021) and ActivityNet-QA (Yu et al., 2019). (Section 1)
  - [Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf)
- **STAR** (measurements) — *measured_by*
  > We evaluate ReasVQA on three popular benchmarks, and our results establish new state-of-the-art performance with significant improvements of +2.9 on NExT-QA, +7.3 on STAR, and +5.9 on IntentQA.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Video-ChatGPT benchmark** (measurements) — *measured_by*
  > We test the trained model on the Video-ChatGPT test set [37] and the other three benchmarks (i.e., MSVD-QA [8], MSRVTT-QA [53], and ActivityNet-QA [6, 58]) where their training sets was not used to train Artemis. (Section 4.2).
  - [Artemis:  Towards Referential Understanding in Complex Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8ec6e5eb9b52bae998dc534713848d-Paper-Conference.pdf)
- **TempCompass** (measurements) — *measured_by*
  > To evaluate Video-STaR’s effect on general video question answering, we evaluated its effect on Video-LLaVA’s performance on TempCompass (Sec. 4.2).
  - [Video-STaR: Self-Training Enables Video Instruction Tuning with Any Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/e789cfc9389048df4a0a44d4086e0dc2-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > Video question answering datasets to enhance TRACE’s reasoning capabilities.
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > The second method involves models freely generating answers, which are then evaluated by GPT-4. Given the question, correct answer, and model’s prediction, GPT-4 returns a True or False judgment.
  - [MMWorld: Towards Multi-discipline Multi-faceted World Model Evaluation in Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/4364fef031fdf7bfd9d1c9c56b287084-Paper-Conference.pdf)
- **LongVideoBench** (measurements) — *measured_by*
  > We also evaluate MVU on the LongVideoBench dataset which contains even longer videos (Section 5.1)
  - [Understanding Long Videos with Multimodal Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f591824a3bd840f74947fcda304c945-Paper-Conference.pdf)
- **MUSIC-AVQA** (measurements) — *measured_by*
  > "and two open-ended VideoQA datasets: MUSIC-AVQA (MUSC) (Li et al., 2022a) and MSVD (Chen & Dolan, 2011)"
  - [Sample then Identify: A General Framework for Risk Control and Assessment in Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1722a6bd1023c026a3d6a570fb3af75-Paper-Conference.pdf)
- **MSVD** (measurements) — *measured_by*
  > "and two open-ended VideoQA datasets: MUSIC-AVQA (MUSC) (Li et al., 2022a) and MSVD (Chen & Dolan, 2011)"
  - [Sample then Identify: A General Framework for Risk Control and Assessment in Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1722a6bd1023c026a3d6a570fb3af75-Paper-Conference.pdf)

### → Video question answering
- **Multimodal understanding** (constructs) — *causes*
  > These models also exhibit strong multimodal understanding (Lin et al., 2023; Li et al., 2024; Zhang et al., 2023b), capable of answering questions about unseen content, thus opening up new avenues for improving VideoQA.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Reasoning** (constructs) — *causes*
  > In this work, we introduce ReasVQA (Reasoning-enhanced Video Question Answering), a novel approach that leverages reasoning processes generated by Multimodal Large Language Models (MLLMs) to improve the performance of VideoQA models.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)

### Associated with
- **Temporal reasoning** (constructs)
  > Wang et al. (2023b) and Ko et al. (2023) try to leverage LLaMA’s (Touvron et al., 2023) knowledge of temporal and causal reasoning to address the complexities of VideoQA.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Causal reasoning** (constructs)
  > Wang et al. (2023b) and Ko et al. (2023) try to leverage LLaMA’s (Touvron et al., 2023) knowledge of temporal and causal reasoning to address the complexities of VideoQA.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Video understanding** (constructs)
  > In the research context of Video-LLMs, typical video-language tasks such as video understanding, summarization, and reasoning can be formulated as video question answering tasks. (Section 3)
  - [Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf)
- **Video summarization** (behaviors tasks)
  > In the research context of Video-LLMs, typical video-language tasks such as video understanding, summarization, and reasoning can be formulated as video question answering tasks. (Section 3)
  - [Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf)
- **Spatial understanding** (constructs)
  > We annotate 98 videos and provide 882 question-answer pairs that target three types of questions: ... 2) spatial Understanding about the position of items and their relation to other items...
  - [Evaluating Multimodal Language Models as Visual Assistants for Visually Impaired Users](https://aclanthology.org/2025.acl-long.1260.pdf)
- **Uncertainty handling** (constructs)
  > Adversarial questions, which cannot be answered based on the information provided in the video, help assess whether models hallucinate responses or can reliably acknowledge uncertainty—a critical safety feature for assistive technologies.
  - [Evaluating Multimodal Language Models as Visual Assistants for Visually Impaired Users](https://aclanthology.org/2025.acl-long.1260.pdf)
