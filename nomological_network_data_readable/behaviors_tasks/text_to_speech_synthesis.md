# Text-to-speech synthesis
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Conversational speech synthesis, Speech generation, Text-to-speech generation, Text-to-speech, Speech synthesis  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is the generation of human-like or otherwise audible speech from text, usually from a given text input, text transcript, or written text. Some definitions extend the input to style instructions or intermediate text responses, while a smaller line of work describes speech synthesis as producing speech waveforms or spectrograms from internal representations such as discrete speech tokens. Some definitions further specify the desired output, for example contextually appropriate speech for multi-turn dialogue or an acoustic style that meets users' needs.

**Variants.** Papers study several variants. The clearest named variant is conversational speech synthesis, where the output is meant to be contextually appropriate for interactive, multi-turn dialogue; other work focuses on fine-grained style-controlled speech generation from open-domain instructions. A smaller line treats the task as zero-shot TTS, sometimes conditioned on a reference audio prompt or unseen speakers' prompts, and one paper relates this use to voice cloning; another paper treats hallucination as a related issue in LLM-based TTS systems.

**Space of elicitation and scores.** No measurement instrument is linked to it. Operationally, papers elicit the behavior with text inputs, text transcripts, written text, open-domain style instructions, intermediate text responses, or internal speech representations such as discrete speech tokens and spectrograms.

**What it is taken as evidence of.** Papers link this behavior to 2 constructs, rather than consistently treating it as evidence of a single one. The linked constructs are In-context learning and Multimodal reasoning: one paper claims a causal relationship from in-context learning to text-to-speech synthesis in an in-context learning setting, while another reports that text-to-speech synthesis is related to multimodal reasoning, describing generated audio that differs from context audio samples as evidence of cross-modal reasoning capability.

## Sources

**[Towards Controllable Speech Synthesis in the Era of Large Language Models: A Systematic Survey](https://aclanthology.org/2025.emnlp-main.40.pdf) (as "Conversational speech synthesis")**
> The task of generating speech that is contextually appropriate for interactive, multi-turn dialogues.

**[Towards Controllable Speech Synthesis in the Era of Large Language Models: A Systematic Survey](https://aclanthology.org/2025.emnlp-main.40.pdf)**
> The task of generating human-like speech from a given text input.

**[Eliciting Implicit Acoustic Styles from Open-domain Instructions to Facilitate Fine-grained Controllable Generation of Speech](https://aclanthology.org/2025.emnlp-main.182.pdf) (as "Speech generation")**
> The observable task of converting textual content and style instructions into an audible speech signal.

**[Koel-TTS: Enhancing LLM based Speech Generation with Preference Alignment and Classifier Free Guidance](https://aclanthology.org/2025.emnlp-main.1076.pdf) (as "Text-to-speech generation")**
> The observable task of synthesizing audible speech from a given text transcript.

**[Charting the Landscape of African NLP: Mapping Progress and Shaping the Road Ahead](https://aclanthology.org/2025.emnlp-main.1414.pdf) (as "Text-to-speech")**
> The task of synthesizing audible speech from written text.

**[Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf) (as "Speech synthesis")**
> The observable process of generating audible speech waveforms from an internal representation, such as discrete speech tokens.

## Relationships

### Associated with
- **Multimodal reasoning** (constructs)
  > We also note that the generated audio appears different from all context audio samples, demonstrating the cross-modal reasoning capability of LLMs when using the LLM-Codec as the connector for text and audio. (Section 5.2)
  - [UniAudio 1.5: Large Language Model-Driven Audio Codec is A Few-Shot Audio Task Learner](https://proceedings.neurips.cc/paper_files/paper/2024/file/6801fa3fd290229efc490ee0cf1c5687-Paper-Conference.pdf)
- **Voice cloning** (behaviors tasks)
  > We apply DiTAR to zero-shot text-to-speech (TTS) that aims to generate speech from unseen speakers’ prompts. (Section 2)
  - [DiTAR: Diffusion Transformer Autoregressive Modeling for Speech Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jia25a/jia25a.pdf)
- **Hallucination** (behaviors tasks)
  > LLM-based TTS systems face challenges, with hallucinations being a prominent issue (Sahoo et al., 2024; Song et al., 2024; Neekhara et al., 2024a; Borsos et al., 2023).
  - [Koel-TTS: Enhancing LLM based Speech Generation with Preference Alignment and Classifier Free Guidance](https://aclanthology.org/2025.emnlp-main.1076.pdf)
- **In-context learning** (constructs)
  > We conduct experiments to validate the effectiveness of LLM-Codec in an in-context learning setting. ... we evaluate LLM-Codec on various audio understanding and generation tasks, such as speech emotion classification, audio classification, simple text-to-speech, and speech denoising.
  - [UniAudio 1.5: Large Language Model-Driven Audio Codec is A Few-Shot Audio Task Learner](https://proceedings.neurips.cc/paper_files/paper/2024/file/6801fa3fd290229efc490ee0cf1c5687-Paper-Conference.pdf)
