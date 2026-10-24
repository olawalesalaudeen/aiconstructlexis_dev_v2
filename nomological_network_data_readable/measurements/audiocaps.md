# AudioCaps
**Type:** Measurement  
**Referenced in:** 14 papers  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats AudioCaps as an audio captioning benchmark or dataset of AudioSet clips paired with human-written captions or natural-language descriptions. Some definitions add that the captions are in English, and one specifies one or two captions per clip. A smaller line of work also describes it as being used for audio retrieval, semantic retrieval, or question answering, and a few papers refer to AudioCapsZS, AudioCaps-QA, or an AC evaluation set.

**What it is claimed to measure.** Papers use AudioCaps to measure 3 behavioral indicators and no constructs. The dominant use is for Audio captioning: papers evaluate generated captions on AudioCaps, sometimes on its test set, and report conventional captioning metrics such as CIDEr. More occasionally, papers report it as measuring Cross-modal retrieval through semantic retrieval on AudioCaps, and Text-to-audio generation through evaluation on the AC evaluation set, so the measurement claims extend beyond captioning but remain centered on it.

**Space of uses.** In practice, papers most often use AudioCaps alongside Clotho or Clotho v2, and some also report it together with MusicCaps or Clotho-AQA. They commonly position it as a major, foundational, or commonly used benchmark for audio captioning, and in one case as part of audio-retrieval benchmarking. No measurement instrument is linked to it.

**Concerns raised.** A concern appears in one paper, which remarks that it is easy for audio-language models to perform well on AudioCaps and Clotho.

## Sources

**[CompA: Addressing the Gap in Compositional Reasoning in Audio-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/43c18853329c7504996b255252b6cb1f-Paper-Conference.pdf)**
> A benchmark dataset used for evaluating audio-retrieval and captioning tasks, containing audio clips from AudioSet with human-written captions.

## Relationships

### → AudioCaps
- **Audio captioning** (behaviors tasks) — *measured_by*
  > evaluate LTU on the test set of two major audio captioning benchmarks Clotho v2 (Drossos et al., 2020) and AudioCaps (Kim et al., 2019) (Section 5.1)
  - [Listen, Think, and Understand](https://proceedings.iclr.cc/paper_files/paper/2024/file/510d0935b543a29d686f93fa52d1c288-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > “Table 3: Semantic retrieval (R@1, R@5, and R@10) for CLAP and ELSA calculated over the original (non-spatial) versions of Clotho and AudioCaps.”
  - [Learning Spatially-Aware Language and Audio Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/3acc054949b6948d4444b35d412cab56-Paper-Conference.pdf)
- **Text-to-audio generation** (behaviors tasks) — *measured_by*
  > We evaluate our model on the AC evaluation set, following the protocol in AudioLDM and using its evaluation toolkit10. (Section 5)
  - [Generative Audio Language Modeling with Continuous-valued Tokens and Masked Next-Token Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25n/yang25n.pdf)
