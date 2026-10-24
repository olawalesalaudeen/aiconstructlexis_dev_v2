# Spoken question answering
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Speech question answering, Speech-based question answering  

## State of the Field

**Space of definitions.** Across the surveyed work, the dominant framing treats it as answering a question delivered in speech, with the model returning either speech or text. Several papers state the goal as producing a correct answer, sometimes a correct and coherent one, and some operationalize success by checking whether the reference answer appears in the response or in its transcription. One paper narrows the content to broad factual knowledge without access to external knowledge, while smaller lines of work define it as answering questions about the content of speech audio or as answering a text question conditioned on spoken context input.

**Variants.** Papers use labels such as SpokenQA, speech question answering, SQA, and spoken-query-based question answering (SQQA). The most common modality split is from spoken questions to spoken answers or from spoken questions to text answers, and one paper explicitly denotes these as S and S→T. Other settings include an audio clip plus a text question with a text answer, spoken question answering over monologue or dialogue audio in free-text form, image-grounded spoken questions, and a formulation as continuing a spoken sentence or question with the appropriate answer.

**Space of elicitation and scores.** Papers measure it with 4 instruments, most often WebQuestions, followed by TriviaQA, with SQA and WikiQA appearing in smaller lines of work. These instruments are used as test sets or curated datasets, sometimes as synthesized audio versions or with synthesised speech queries. Scoring is commonly reported either as test-set accuracy or by checking whether the reference answer appears in the model's response, including after transcription of spoken output.

**What it is taken as evidence of.** On the construct side, papers connect it to 1 construct, speech understanding. That connection is phrased as a related link, with one benchmark section listing "Speech Question Answering (SQA)" under "Speech Understanding", rather than as a causal or correlational claim. Papers do not name another construct alongside it.

## Sources

**[Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf)**
> The model answers spoken questions with either spoken or textual responses.

**[VLAS: Vision-Language-Action Model with Speech Instructions for Customized Robot Manipulation](https://proceedings.iclr.cc/paper_files/paper/2025/file/804a1a9de5787e3597b4bb64e1a48ec3-Paper-Conference.pdf) (as "Speech question answering")**
> The task of answering a question posed in speech based on the content of a given image.

**[VoiceTextBlender: Augmenting Large Language Models with Speech Capabilities via Single-Stage Joint Speech-Text Supervised Fine-Tuning](https://aclanthology.org/2025.naacl-long.298.pdf) (as "Speech-based question answering")**
> Answering text questions based on spoken context input, generating text responses conditioned on audio and text inputs.

## Relationships

### Spoken question answering →
- **WebQuestions** (measurements) — *measured_by*
  > Similarly, on the Web Questions test set, the proposed model attains an accuracy of 6.1%, while SpeechGPT yields a comparable accuracy of 6.5%. (Section 4.2.3)
  - [Spoken Question Answering and Speech Continuation Using Spectrogram-Powered LLM](https://proceedings.iclr.cc/paper_files/paper/2024/file/e393677793767624f2821cec8bdd02f1-Paper-Conference.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > Spoken Question Answering ... We evaluate our model on 3 datasets in D´efossez et al. (2024): Web Questions (Berant et al., 2013), Llama Questions (Nachmani et al., 2024), and TriviaQA (Joshi et al., 2017).
  - [Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf)
- **WikiQA** (measurements) — *measured_by*
  > For the SQQA task, the WikiQA (Yang et al., 2015) test set with synthesised speech queries provided by (Tang et al., 2024) was used. (Section 5.1)
  - [Wav2Prompt: End-to-End Speech Prompt Learning and Task-based Fine-tuning for Text-based LLMs](https://aclanthology.org/2025.naacl-long.354.pdf)

### Associated with
- **Speech understanding** (constructs)
  > 3.3.1 Speech Understanding ... Speech Question Answering (SQA).
  - [AudioBench: A Universal Benchmark for Audio Large Language Models](https://aclanthology.org/2025.naacl-long.218.pdf)
