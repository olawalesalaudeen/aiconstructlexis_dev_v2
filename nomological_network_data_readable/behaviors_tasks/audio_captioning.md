# Audio captioning
**Type:** Behavior  
**Referenced in:** 14 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing is generating a natural-language or textual caption for an audio clip. Most definitions describe non-speech audio, especially environmental sounds or events, and some extend the scope to music or scene-based sounds. A few formulations make the output requirement more specific as a sentence or description of the sounds present in an audio clip, and one paper elicits it with the prompt 'write an audio caption describing the sound' and uses the model output as the prediction.

**Variants.** Papers use several nearby names for this task, most commonly audio captioning, and sometimes automatic audio captioning or AAC. The studied content is usually general non-speech audio, though papers explicitly mention environmental sounds, events, scene-based sounds, and music, including an example caption for a classical piece played at a slow tempo.

**Space of elicitation and scores.** Papers link audio captioning to three measurement instruments. The most frequent are AudioCaps and Clotho, with MusicCaps appearing less often; these are described as audio captioning benchmarks or datasets, and some papers describe AudioCaps and Clotho as human-annotated. Elicitation is sometimes prompt based, and scoring is described with conventional audio captioning metrics, with CIDEr appearing in one reported result label.

**What it is taken as evidence of.** Across these papers, the construct framing is narrow. The only linked construct is Audio understanding, and one paper relates audio captioning to it by saying that connecting audio encoders with LLMs enables various audio understanding tasks, such as automatic speech recognition and audio captioning. No other construct is linked in these papers.

## Sources

**[Listen, Think, and Understand](https://proceedings.iclr.cc/paper_files/paper/2024/file/510d0935b543a29d686f93fa52d1c288-Paper-Conference.pdf)**
> Generating natural language descriptions of non-speech audio content such as environmental sounds or events.

## Relationships

### Audio captioning →
- **AudioCaps** (measurements) — *measured_by*
  > evaluate LTU on the test set of two major audio captioning benchmarks Clotho v2 (Drossos et al., 2020) and AudioCaps (Kim et al., 2019) (Section 5.1)
  - [Listen, Think, and Understand](https://proceedings.iclr.cc/paper_files/paper/2024/file/510d0935b543a29d686f93fa52d1c288-Paper-Conference.pdf)
- **Clotho** (measurements) — *measured_by*
  > We evaluate our proposed approach on two popular and publicly available human-annotated audio captioning datasets: AudioCaps and Clotho (Tampere University licence), using conventional audio captioning metrics. (Section 4)
  - [An eye for an ear: zero-shot audio description leveraging an image captioner with audio-visual token distribution matching](https://proceedings.neurips.cc/paper_files/paper/2024/file/4426af45e987692abf1b80108951ff8a-Paper-Conference.pdf)
- **MusicCaps** (measurements) — *measured_by*
  > Table 2 summarizes the comparative results for audio captioning tasks on AudioCaps, Clotho, and MusicCaps benchmarks. (Section 4.2.1)
  - [MATS: An Audio Language Model under Text-only Supervision](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ai/wang25ai.pdf)

### Associated with
- **Audio understanding** (constructs)
  > Connecting audio encoders with large language models (LLMs) allows the LLM to perform various audio understanding tasks, such as automatic speech recognition (ASR) and audio captioning (AC). (Abstract)
  - [Enhancing Speech Large Language Models with Prompt-Aware Mixture of Audio Encoders](https://aclanthology.org/2025.emnlp-main.974.pdf)
